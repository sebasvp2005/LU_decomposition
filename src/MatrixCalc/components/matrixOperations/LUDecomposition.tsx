import { ReactElement } from "react";
import { Determinant } from "./Determinant";

function renderMatrix(matrix: number[][], n:number){
  let elements = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        elements.push(
          <div 
          
          key={`cell_${i}${j}m_${n}`} 
          className=" text-center w-fit min-w-[40px] self-stretch" 
          >
           { matrix[i][j]}
          </div>
        );
      }
    }
    return (
      <div className="flex">
        <div className=" min-h-full w-[0.5px] mr-1 bg-white"></div>
        <div className="grid gap-1 w-fit" key={`matrix_${n}`} style={{"gridTemplateColumns": `repeat(${matrix.length}, minmax(0, 1fr))`}}>
          {
            elements
          }
        </div>
        <div className=" min-h-full w-[0.5px]  ml-1 bg-white"></div>
      </div>
    )
}


export const LUDecomposition = (matrix: Array<Array<number>>):ReactElement=>{

  const determinantCalculator = new Determinant();
  const determinantValue = determinantCalculator.determinantOfMatrix(matrix, matrix.length);
  let elements: ReactElement[] = []
  console.log(determinantValue)
  if(determinantValue==0){
    return <div>
      <span>La Matrix no tiene inversa</span>
      {renderMatrix(matrix,elements.length+1)}
    </div>
  }
  let n = matrix.length

  let U = matrix.map(row => [...row]);
  let L =  Array(n).fill(0).map(() => Array(n).fill(0))

  for(let j =0; j<n; j++){
    for(let i= j+1; i<n; i++){
      let factor = U[i][j] / U[j][j]
      for(let k =0; k<n; k++){
        U[i][k] -= U[j][k]*factor
        U[i][k] = Number(U[i][k].toFixed(3))
      }

      L[i][j] = Number(factor.toFixed(3))
      elements.push(
        <div key={`${i}${j}_U`} className="flex items-center my-4">
          {renderMatrix(U, n)}
          <span className=" mx-4 self-center">{`F${i+1}  - (${factor.toFixed(3)} * F${j+1}) `}</span>
        </div>
    )
    }
  }

  for(let i=0; i <n; i++) L[i][i] = 1;

  return(
    <>
    <div>
      {renderMatrix(matrix,elements.length+1)}
      <div className="flex flex-wrap mt-4">
        {elements}
      </div>
      <div className="flex flex-wrap my-4 space-x-4">
        <div className="flex items-center">
          <span>{"U -> "}</span>
          {renderMatrix(U, n)}
        </div>
        <div className="flex items-center">
          <span>{"L -> "}</span>
          {renderMatrix(L, n)}
        </div>
      </div>
    </div>
    </>
  )
}