
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
const Navbar = () => {
  return (
    <>
    <div className="flex justify-between px-[10%] py-4 items-center w-[100%] navbar">
      <a href='/'>
      <div className='font-extrabold text-[24px]'>
        GymReels
      </div>
      </a>
      <div className='border rounded-md pl-4 pr-4 py-2 flex items-center'>
        <input placeholder="Search gyms and accounts "
        className='outline-none' 
        />
        <div className='cursor-pointer'><GoSearch /></div>
      </div>
      <div className="flex gap-5 items-center">
        <button className='flex items-center gap-2'><span><AiOutlineCloudUpload/></span>Create</button>
        <a href='/signup'>
        <button>Sign Up</button>
        </a>
      </div>
      </div>
      </>
  );
}

export default Navbar;