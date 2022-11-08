import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Upload from "../../public/assets/upload.svg";
import { File as Files } from "@prisma/client";
import { useRouter } from "next/router";

const create = () => {
  const [count, setCount] = React.useState(0);

  const { data: session }: any = useSession();
  const [files, setFiles] = useState<Files[]>([]);
  const [title, setTitle] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const createProject = async () => {
    if (
      title.trim().length === 0 ||
      files.length === 0 ||
      uploadingImage ||
      submitted
    ) {
      return;
    }
    console.log(files);
    console.log(title);
    console.log(uploadingImage);
    setSubmitted(true);
    const res = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        files,
      }),
    });
    if (!res.ok) {
      alert("Something went wrong :(. Please try again.");
      return;
    }
    router.push("/");
  };

  const deleteFile = async (file: Files) => {
    setFiles((files) => files.filter((f) => f.url !== file.url));
    await fetch("/api/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: file.url }),
    });
  };

  return (
    <>
      {session ? (
        <div className="justify-between px-[10%] py-4 items-center w-[100%]">
          <h1 className="font-extrabold text-[30px]">Upload To Motivate!</h1>

          <div>
            <div className="flex justify-between  py-4 items-center w-[80%]">
              <label className="font-bold">Caption</label>
              <p>{count}/150</p>
            </div>
            <div className="flex border justify-between items-center w-[80%] rounded-md">
              <textarea
                className="outline-none w-[75%] items-center bg-transparent"
                maxLength={150}
                //onChange={(e) => setCount(e.target.value.length)} 
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                value={title}
                
              ></textarea>

              <div className="mr-5 items-center font-bold">
                @Tag | #hahstags
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="font-extrabold">Preview</label>
            <div className="text-center">
              <input
                name="video"
                type="file"
                accept="video/*"
                  onChange={async (e) => {
                    if (e.target.files) {
                      setUploadingImage(true);
                      const fd = new FormData();
                      Array.from(e.target.files).forEach((file, i) => {
                        fd.append(file.name, file);
                      });

                      const media = await fetch("/api/upload", {
                        method: "POST",
                        body: fd,
                      });

                      const newFiles = await media.json();
                      setFiles((f) => [...f, ...newFiles]);
                      e.target.value = "";
                      setUploadingImage(false);
                    // console.log(e.target.files);
                    }
                  }}
                className="w-full h-full opacity-10 z-[100]"
              />
               {uploadingImage ? (
                  <p className="text-gray-300">Uploading video...</p>
                ) : null}
            </div>
          </div>
          <div className="w-[80%]">
            <div className="flex items-center justify-center text-center outline-dashed outline-[2px] outline-gray-300 h-[50vh] rounded-md w-[70%] m-auto cursor-pointer hover:outline-[#9C9CD9]">
              <p className="flex items-center text-[#9C9CD9] font-extrabold text-[20px] text-center gap-4">
                <span className="items-center">
                  <Image src={Upload} alt="upload-icon" />
                </span>{" "}
                Upload Video
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-2xl textstyle items-center mt-[250px]">
          Please{" "}
          <a className="text-blue-700" href="/auth/signin">
            sign
          </a>{" "}
          in to post.
        </div>
      )}
    </>
  );
};

export default create;
