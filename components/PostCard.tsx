import { File, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export const PostCard = ({
  post,
}: {
  post: {
    id?: string;
    title: string;
    files: File[];
    person: User[];
  };
  className?: string;
  noBorder?: boolean;
}) => {
  return (
    <div className="relative mb-4 space-y-4  rounded-lg md:mr-[300px] md:ml-[300px] username">
      <div className="flex space-x-2">
        {post.person.map((user, i) => {
          return (
            <div className="mx-auto !mt-0 block w-fit items-center">
              <div className="text-xl  text-left mr-[150px] items-center flex font-black">
                {/* <Image
                  src={user.image}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-[50px] cursor-pointer"
                />
                 */}
                {user.username}
              </div>
            </div>
          );
        })}
      </div>
      {"id" in post ? (
        <Link href={`/post/view/${post.id}`}>
          <a className="mx-auto !mt-0 block w-fit">
            <h2 className="text-xl  text-left mr-[150px] hover:underline">
              {post.title}
            </h2>
          </a>
        </Link>
      ) : (
        <h2 className="!mt-0 text-left text-xl ">{post.title}</h2>
      )}

      {/* {JSON.stringify(post)} */}
      {post.files.map((file) => {
        return (
          <video
            autoPlay
            loop
            controls
            className="mx-auto w-full max-w-sm rounded-lg"
            key={file.url}
            src={file.url}
            width={file.width}
            height={file.height}
          />
        );
      })}
    </div>
  );
};
