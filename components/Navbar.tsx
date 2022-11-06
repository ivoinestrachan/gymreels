import { AiOutlineCloudUpload } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex justify-between px-[10%] py-4 items-center w-[100%] navbar">
        <a href="/">
          <div className="font-extrabold text-[24px] flex items-center">
            GymReels{" "}
            <span className="text-white bg-red-600 h-7 text-[18px] ml-1 rounded-[4px] pl-2 pr-2 pb-[12px]">
              Beta
            </span>
          </div>
        </a>
        <div className="border rounded-md pl-4 pr-4 py-2 flex items-center">
          <input
            placeholder="Search gyms and accounts "
            className="outline-none bg-transparent"
          />
          <div className="cursor-pointer">
            <GoSearch />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <a href="/post/create">
            <button className="flex items-center gap-2">
              <span>
                <AiOutlineCloudUpload />
              </span>
              Create
            </button>
          </a>
          {!session ? (
            <a href="/auth/signup">
              <button>Sign Up</button>
            </a>
          ) : (
            <div
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <FiLogOut
                color="red"
                fontSize="1.2em"
                className="cursor-pointer h-8"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
