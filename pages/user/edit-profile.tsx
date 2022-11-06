import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
const editprofile = () => {
  const { data: session }: any = useSession();
  return (
    <>
      {session ? (
        <div className="mt-20">
          <div className="text-center font-extrabold text-[34px]">
            Edit User Profile
          </div>
          <p className="text-center font-medium text-[18px]">
            Show People Who You Are!
          </p>
          <div className="text-center mt-10">
            {session && session.user && (
              <span className="items-center">
                <Image
                  src={session.user.image}
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-[50px] cursor-pointer"
                />
              </span>
            )}
          </div>
          <div className="justify-center items-center w-[30%] m-auto mt-5">
            <label>Name</label>
            <div>
              <input className="outline-none border rounded-md pl-4 pr-4 py-2 w-[100%]" />
            </div>
            <div className="mt-10">
              <label>Username</label>
              <div>
                <input className="outline-none border rounded-md pl-4 pr-4 py-2 w-[100%]" />
              </div>
            </div>

            <div className="mt-10">
              <label>Bio</label>
              <div>
                <input className="outline-none border rounded-md pl-4 pr-4 py-2 w-[100%]" disabled placeholder="coming soon"/>
              </div>
            </div>
          </div>

          
          <div className="text-center mt-5 m-auto w-[100%]">
            <button className="text-center bg-green-500 py-2 pl-4 pr-4 rounded-md">
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-2xl textstyle items-center mt-[250px]">
          Please{" "}
          <a className="text-blue-700" href="/auth/signin">
            sign
          </a>{" "}
          in to edit profile.
        </div>
      )}
    </>
  );
};

export default editprofile;
