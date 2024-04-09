import { ReactElement } from "react";

export const Footer = ():ReactElement=>{
  return (
  <>
    <div className=" p-4 flex flex-col  border-white w-full">
      <div className="w-full h-[1px] bg-white mx-auto"> </div>
      <span className="text-md self-end my-4 ">@ All rights reserved to MetaCoder</span>
    </div>
  </>
  )
}