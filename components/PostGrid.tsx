import { ReactNode } from "react";




export const PostGrid = ({children}: {children: ReactNode}) => {
  return (
    <>
    <div className="mt-5 text-center">

    {children}
    </div>
    </>
    );
}