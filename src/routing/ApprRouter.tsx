import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import { Interface } from "../MatrixCalc/pages/Interface";
export const AppRouter = (): ReactElement => {

  return (
    <Routes>
      <Route path="/" element={<Interface />} />
    </Routes>
  )
}