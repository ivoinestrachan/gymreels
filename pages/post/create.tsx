import React from "react";
import { useSession } from "next-auth/react";

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
              <p>{count}/200</p>
            </div>
            <div className="flex border justify-between items-center w-[80%]">
              <textarea
                className="outline-none w-[75%] items-center rounded-[10px]"
                maxlength="200"
                onChange={(e) => setCount(e.target.value.length)}
              ></textarea>

              <div className="mr-5 items-center font-bold">
                @Tag | #hahstags
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="font-extrabold">Preview</label>
            <div className="text-center mt-20">
              <input
                type="file"
                accept="video/*"
                className="outline-dashed outline-[2px] outline-gray-200"
              />
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
