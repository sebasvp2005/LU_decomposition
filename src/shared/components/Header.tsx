import { ReactElement } from "react";

export const Header = ():ReactElement=>{
  return (
  <>
    <div className="h-[100px] p-4  border-white w-full">
      <span className="text-3xl font-semibold">LU Decomposition</span>
      <div className="w-full h-[1px] bg-white mx-auto"> </div>
    </div>
  </>
  )
}