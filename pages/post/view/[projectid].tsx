import prisma from "../../../lib/prisma";
import { PostCardType } from "../..";


const ViewProject = ({ project }: { project: PostCardType }) => {
  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4 md:p-6 lg:p-8">
      <div className="text-5xl font-black">{project.title}</div>

      <div className="flex items-center justify-start space-x-6 overflow-y-auto">
        {project.files?.map((file) => {
          return (
            <video 
            autoPlay loop controls
              key={file.url}
              width={(file.width * 288) / file.height}
              height={288}
              src={file.url}
              
            />
          );
        })}
      </div>

      
    </div>
  );
};

export default ViewProject;

export async function getServerSideProps(context: any) {
  const { projectid } = context.params;

  let project = await prisma.post.findUnique({
    where: {
      id: projectid,
    },
    include: {
      files: true,
      person: {
        select: {
          name: true,
          username: true,
          image: true,
          id: true,
        },
      },
    },
  });

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project }, // will be passed to the page component as props
  };
}