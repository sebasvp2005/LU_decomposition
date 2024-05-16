import { ReactElement } from "react";

export const Header = ():ReactElement=>{
  return (
  <>
    <div className="h-[100px] p-4   text-secondary w-full">
      <span className="text-3xl font-semibold">LU Decomposition</span>
      <div className="w-full h-[1px] bg-secondary mx-auto"> </div>
    </div>
  </>
  )
}