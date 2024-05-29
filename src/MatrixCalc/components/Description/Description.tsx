import { ReactElement } from "react";

export const Description = ():ReactElement=>{

  return(<div className="space-y-4">
    <h1 className="font-bold text-3xl">Descomposicion LU</h1>
    <span className="w-4/5 block">
      Descompone en una matriz en el producto de dos matrices: una triangular inferior, llamada matriz L y una triangular superior llamada matriz U. Esta factorización es fundamental en la resolución de sistemas de ecuaciones lineales y en la resolución de matrices.  Se utiliza para resolver sistema de ecuaciones lineales y para calcular determinantes de matrices de forma más eficiente.
    </span>
  </div>)
}