import { File, User } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

export const PostCard = ({
  post,
}: {
  post: {
    id?: string;
    title: string;
    files: File[];
  };
  className?: string;
  noBorder?: boolean;
}) => {
  return (
    <div className="relative mb-4 space-y-4  bg-white rounded-lg md:mr-[300px] md:ml-[300px] username">
      {"id" in post ? (
        <Link href={`/post/view/${post.id}`}>
          <a className="mx-auto !mt-0 block w-fit">
            <h2 className="text-center text-xl  hover:underline">
              {post.title}
            </h2>
          </a>
        </Link>
      ) : (
        <h2 className="!mt-0 text-center text-xl ">{post.title}</h2>
      )}

      {/* {JSON.stringify(post)} */}
      {post.files.map((file) => {
        return (
          <video
          autoPlay loop controls
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
