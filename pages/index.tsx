import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import UserProfile from "../components/UserProfile";
import Apple from "../public/assets/appstore.svg";
import Google from "../public/assets/googleplay.svg";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>GymReels</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <video id="videoBG" autoPlay muted loop>
          <source src="/assets/gym.mp4" type="video/mp4" />
        </video>
        <div className="text-white mobile font-extrabold px-5 pt-2 text-[18px]">
          GymReels{" "}
          <span className="text-white bg-red-600  text-[18px] ml-1 rounded-[4px] pl-2 pr-2 pb-[2px]">
            Beta
          </span>
        </div>
        <div className="mobile text-center pt-[250px]">
          <div className="text-center text-[34px] font-bold text-white">
            Work In Progress
          </div>
          <div className="mt-5 w-[50%] m-auto">
            <div>
              <Image src={Apple} alt="apple" />
            </div>
            <div className="mt-5">
              <Image src={Google} alt="google" />
            </div>
          </div>
        </div>
        <a href="https://www.instagram.com/gaigealexzander/">
          <p className="text-white mobile bg-slate-900 rounded-md py-2 text-center w-[45%] bottom-5 absolute left-[50%]">
            @gaigealexzander
          </p>
        </a>
        <UserProfile />
      </div>
    </>
  );
};

export default Home;
