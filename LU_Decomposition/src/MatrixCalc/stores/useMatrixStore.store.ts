import {create} from "zustand";

export interface Matrix{
  matrix : Array<Array<number>>;
  setMatrix : (matrix: Array<Array<number>>) =>void
}

export const useMatrix = create<Matrix> ((set)=>({
  matrix: Array(3).fill(Array(3).fill(0)),
  setMatrix: (matrix: Array<Array<number>>)=>set(()=>({
    matrix : matrix
  }))
}));