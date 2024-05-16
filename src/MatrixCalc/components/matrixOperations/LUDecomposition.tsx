import { ReactElement } from "react";


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
      <div className="flex mr-4">
        <div className=" min-h-full w-[0.5px] mr-1 bg-secondary"></div>
        <div className="grid gap-1 w-fit" key={`matrix_${n}`} style={{"gridTemplateColumns": `repeat(${matrix.length}, minmax(0, 1fr))`}}>
          {
            elements
          }
        </div>
        <div className=" min-h-full w-[0.5px]  ml-1 bg-secondary"></div>
      </div>
    )
}


export const LUDecomposition = (matrix: Array<Array<number>>):ReactElement=>{

  /*const determinantCalculator = new Determinant();
  const determinantValue = determinantCalculator.determinantOfMatrix(matrix, matrix.length);
  console.log(determinantValue)
  if(determinantValue==0){
    return <div>
    <span>La Matrix no tiene inversa</span>
    {renderMatrix(matrix,elements.length+1)}
    </div>
  }
  */
 
 const swapRows = (M: Array<Array<number>>, a:number, b:number)=>{
   let n = M.length
   for(let i =0; i<n; i++){
    let temp = M[a][i]
     M[a][i] = M[b][i]
     M[b][i]=temp
    }
    return M;
  }
  const swapColumns = (M: Array<Array<number>>, a:number, b:number)=>{
    let n = M.length
    for(let i =0; i<n; i++){
     let temp = M[i][a]
      M[i][a] = M[i][b]
      M[i][b]=temp
     }
     return M;
  }


  let elements: ReactElement[] = []
  let n = matrix.length

  let P = Array(n).fill(0).map(() => Array(n).fill(0))
  let U = matrix.map(row => [...row]);
  let L =  Array(n).fill(0).map(() => Array(n).fill(0))

  for(let i=0; i <n; i++) {L[i][i] = 1;P[i][i]=1;}

  for(let j =0; j<n; j++){

    let ind =-1;

    for(let i =j+1; i<n; i++){
      if(U[i][j]!=0) {ind = i; break;}
    }
    if(U[j][j]==0){
      if(ind!=-1){
        console.log('swapping', j , ind);
        P = swapRows(P, j, ind);
        L = swapColumns(swapRows(L, j, ind), j, ind);
        U = swapRows(U, j, ind);
        elements.push(
          <div key={`${ind}${j}_swapp`} className="flex items-center my-4">
            <span className=" mx-4 self-center">{`F${j+1} <-> F${ind+1} `}</span>
            {renderMatrix(U, n)}
          </div>
        )
      }
      else continue;
    }

    for(let i= j+1; i<n; i++){
      let factor = U[i][j] / U[j][j]
      for(let k =0; k<n; k++){
        U[i][k] -= U[j][k]*factor
        U[i][k] = Number(U[i][k].toFixed(3))
      }

      L[i][j] = Number(factor.toFixed(3))
      if(factor==0)continue;
      elements.push(
        <div key={`${i}${j}_U`} className="flex items-center my-4">
          <span className=" mx-4 self-center">{`F${i+1}  - (${factor.toFixed(3)} * F${j+1}) `}</span>
          {renderMatrix(U, n)}
        </div>
    )
    }
  }


  return(
    <>
    <div key={'matrix'}>
      {renderMatrix(matrix,elements.length+1)}
      <div className="flex flex-wrap mt-4">
        {elements}
      </div>
      <div className="flex flex-wrap items-center my-4">
          <span>{"P -> "}</span>
          {renderMatrix(P, n)}
        
          <span>{" . "}</span>
        
          <span>{"A -> "}</span>
          {renderMatrix(matrix, n)}
        
          <span>{" = "}</span>
                
          <span>{"L -> "}</span>
          {renderMatrix(L, n)}
               
          <span>{" . "}</span>
      
          <span>{"U -> "}</span>
          {renderMatrix(U, n)}

      </div>
    </div>
    </>
  )
}