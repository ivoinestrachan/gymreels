import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Apple from "../public/assets/appstore.svg"
import Google from "../public/assets/googleplay.svg"

const Home: NextPage = () => {
  return (
    <>
    <div>
      <Head>
        <title>GymReels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video id='videoBG' autoPlay muted loop>
        <source src='/assets/gym.mp4' type='video/mp4' />
      </video>
      <div className='text-white mobile font-extrabold px-5 pt-2 text-[18px]'>GymReels</div>
      <div className='mobile text-center pt-[250px]'>
      <div className='text-center text-[36px] font-bold text-white'>Coming Soon</div>
      <div className='mt-5'>
      <div><Image src={Apple} /></div>
      <div className='mt-5'><Image src={Google} /></div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home
