import { ReactElement, useState } from "react";
import { useMatrix } from "../stores/useMatrixStore.store";
import { LUDecomposition } from "./matrixOperations/LUDecomposition";

export const MatrixForm = ():ReactElement=>{
  const matrix = useMatrix(e=>e.matrix)
  const setMatrix = useMatrix(e=>e.setMatrix)
  const [history, setHistory] = useState<any[]>([])

  const onChange = (i:number, j:number, val:number)=>{
    const temp = matrix.map(row => [...row]);
    temp[i][j] = val;
    setMatrix(temp);
  }
  const CreateForm = () => {
    let elements = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        elements.push(
          <input 
          type="number"
          key={`${i}_${j}`}
          className="aspect-[2/1] text-center w-[80px] border bg-[#3f3f3f]" 
          value={matrix[i][j]== 0? '': matrix[i][j]}
          placeholder="0"
          onChange={(e=>onChange(i,j,Number(e.target.value)))}/>
        );
      }
    }
    console.log(elements.length)
    return elements;
  };

  const increase = ()=>{
    const temp = Array(matrix.length+1).fill(Array(matrix.length+1).fill(0))
    setMatrix(temp)
  }
  const decrease = ()=>{
    const temp = Array(matrix.length-1).fill(Array(matrix.length-1).fill(0))
    setMatrix(temp)
  }
  const reset = ()=>{
    const temp = Array(matrix.length).fill(Array(matrix.length).fill(0))
    setMatrix(temp)
  }

  const LUDecom = ()=>{

    const temp = [...history]
    if(temp.length!=0){
      temp.push(<div key={`div_${temp.length}`} className="h-[0.5px] w-full my-4 bg-white"></div>)
    }
    temp.push(LUDecomposition(matrix))
    setHistory(temp)
  }

  
  return(
    <>
      <div className="w-[90%] mx-auto flex flex-col items-center space-y-4">
        <span className="text-3xl">Matrix</span>

        <div className="flex space-x-4">
          <div className=" min-h-full w-[0.5px] bg-white"></div>
          <div className={`grid gap-1`} style={{"gridTemplateColumns": `repeat(${matrix.length}, minmax(0, 1fr))`}}>
            {CreateForm()}
          </div>
          <div className=" min-h-full w-[0.5px] bg-white"></div>
        </div>

        <div className="space-x-3 text-2xl mt-4">
          <button className=" px-4 bg-gray-600 rounded-lg border" onClick={decrease}>-</button>
          <button className=" px-4 bg-gray-600 rounded-lg border " onClick={reset}>Clear</button>
          <button className=" px-4 bg-gray-600 rounded-lg border " onClick={increase}>+</button>
        </div>
        <div className="grid" >
          <button className="bg-gray-500 py-1 px-2 border" onClick={LUDecom}>LU Decomposition</button>
        </div>
        <div className="h-[0.5px] w-full bg-white"></div>
        <span className="self-start ml-4 text-2xl">History</span>
        <div className="flex flex-col-reverse  w-full">
          {
            history
          }
        </div>
      </div>
    </>
  )
}