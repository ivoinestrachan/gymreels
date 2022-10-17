import React from "react";

const signup = () => {
  return (
    <div>
      <div className="text-center pt-5 font-extrabold text-[24px]">Sign Up</div>
      <div className="justify-center text-center">
        <div className="mt-5">
          <input placeholder="Full Name" 
          className="outline-none border rounded-md pl-4 pr-4 py-2 w-[15%] sm:w-[30%]" />
        </div>

        <div className="mt-5">
          <input
            placeholder="Username"
            className="outline-none border rounded-md pl-4 pr-4 py-2 w-[15%] sm:w-[30%]"
          />
        </div>

        <div className="mt-5">
          <input
            placeholder="Email Address"
            className="outline-none border rounded-md pl-4 pr-4 py-2 w-[15%] sm:w-[30%]"
          />
        </div>

        <div className="mt-5">
          <input
            placeholder="Password"
            className="outline-none border rounded-md pl-4 pr-4 py-2 w-[15%] sm:w-[30%]"
          />
        </div>
      </div>
      <div className="text-center mt-10 text-[20px] items-center">Have a account? <a href="/signin"><span className="underline">Sign In</span></a></div>
    </div>
  );
};

export default signup;
