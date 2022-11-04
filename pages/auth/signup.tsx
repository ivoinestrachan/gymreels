import React from "react";

const signup = () => {
  return (
    <div className="w-80 mx-auto">
      <div className="text-center pt-5 font-extrabold text-[24px]">Sign Up</div>
      <div className="justify-center text-center">
        <div className="mt-5">
          <input
            placeholder="Full Name"
            className="outline-none border rounded-md pl-4 pr-4 py-2 w-full"
          />
        </div>

        <div className="mt-5">
          <input
            placeholder="Username"
            className="outline-none border rounded-md pl-4 pr-4 py-2 w-full"
          />
        </div>

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
            Sign Up
          </button>
        </div>
      </div>

      <div className="text-center mt-10 text-[18px] items-center">
        have an account?
        <a href="/auth/signin">
          <span className="text-blue-500"> Sign In</span>
        </a>
      </div>
    </div>
  );
};

export default signup;
