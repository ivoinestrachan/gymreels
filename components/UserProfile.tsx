import { useSession } from "next-auth/react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { useTheme } from 'next-themes'


const UserProfile = () => {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="username items-center mt-10">
        <div className="items-center text-right  w-[90%]">
          <div className="flex items-center gap-5  align2">
            <div>
              {session && session.user && (
                <div className="text-[18px] font-bold items-center">
                  {session.user.name}
                </div>
              )}
              {session && session.user && (
                <div className="text-[16px] text-[#ACAEC5] font-medium">
                  {session.user.username}@
                </div>
              )}
            </div>
            <Menu>
              <Menu.Button>
                {" "}
                <div>
                  {session && session.user && (
                    <span className="items-center">
                      <Image
                        src={session.user.image}
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-[50px] cursor-pointer"
                      />
                    </span>
                  )}
                </div>
              </Menu.Button>
              <Menu.Items className="absolute  mt-[270px] w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className="group flex w-full items-center rounded-md px-2 py-3 text-md hover:bg-gray-100"
                      href="/"
                    >
                      View Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className="group flex w-full items-center rounded-md px-2 py-3 text-md hover:bg-gray-100"
                      href="/user/edit-profile"
                    >
                      Edit Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className="group flex w-full items-center rounded-md px-2 py-3 text-md hover:bg-gray-100"
                      href="/"
                    >
                      Feedback
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                
                  {({ active }) => (
                    <button
                      className="group flex w-full items-center rounded-md px-2 py-3 text-md hover:bg-gray-100"
                      onClick={() => setTheme('dark')}
                    >
                      Dark Mode
                    </button>
                  )}

                 
                </Menu.Item>
                
              </Menu.Items>
            </Menu>
          </div>
        </div>
        {session && session.user && (
          <div className="font-bold text-[#ACAEC5] text-right w-[90%] mt-5">
            Suggested Videos For You
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
