import Image from "next/image";
import googleicon from "../../public/assets/googleicon.svg"
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]"
import { signIn } from "next-auth/react";




const signin = () => {
  return (
    <div className="w-80  mx-auto">
      <div className="text-center pt-5 font-extrabold text-[24px]">Sign In</div>
      <div className="justify-center text-center">
        <div className="mt-5">
          <input
            placeholder="Email Address"
            className="outline-none border rounded-md pl-4 pr-4 py-2 w-full"
          />
        </div>

        <div className="mt-5">
          <input
            placeholder="Password"
            className="outline-none border rounded-md pl-4 pr-4 py-2 w-full"
          />
        </div>
        <div className="mt-5">
          <button className="bg-blue-500 w-full rounded-md pl-4 pr-4 py-2 text-white">
            Sign In
          </button>
        </div>
      </div>
      <div className="mt-5">
        <button className="border flex items-center text-center w-full justify-center pl-4 pr-4 py-2 rounded-md border-black"
         type="button"
         onClick={(e) => {
           e.preventDefault();
           signIn("google");
         }}
       >
          Sign in with Google
          <span className="pl-2 items-center">
            {" "}
            <Image src={googleicon} alt="google"/>
          </span>
        </button>
      </div>
      <div className="text-center mt-10 text-[18px] items-center">
        don't have an account yet?
        <a href="/auth/signup">
          <span className="text-blue-500"> Sign Up</span>
        </a>
      </div>
    </div>
  );
};

export default signin;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
