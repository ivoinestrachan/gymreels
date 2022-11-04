import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Upload from "../../public/assets/upload.svg"

const create = () => {
  const [count, setCount] = React.useState(0);

  const { data: session }: any = useSession();

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
                className="outline-none w-[75%] items-center"
                maxLength={150}
                onChange={(e) => setCount(e.target.value.length)}
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
                multiple
                className="w-full h-full opacity-10 z-[100]"
              />
            </div>
          </div>
          <div className="w-[80%]">
        <div className="flex items-center justify-center text-center outline-dashed outline-[2px] outline-gray-300 h-[50vh] rounded-md w-[70%] m-auto cursor-pointer hover:outline-[#9C9CD9]">
          <p className="flex items-center text-[#9C9CD9] font-extrabold text-[20px] text-center gap-4">
         <span className="items-center"><Image src={Upload} alt="upload-icon"/></span>   Upload Video
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
