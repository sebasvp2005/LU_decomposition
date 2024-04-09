import { ReactElement , JSXElementConstructor, useState } from 'react'
import { Header } from '../../shared/components/Header'
import { MatrixForm } from '../components/MatrixForm'
import { Description } from '../components/Description/Description'
import { Footer } from '../../shared/components/Footer'
interface sideBarOption {
  name : string,
  render: JSXElementConstructor<unknown>
}
export const Interface = ():ReactElement => {
  const sideBarOptions: sideBarOption[] = [
    {name : 'Descripcion', render : Description},
    {name : 'Calculator', render : MatrixForm},
    
  ]
  const [curIndex, setCurIndex] = useState(0)
  const renderCurrentStep = () => {
    const CurrentStepComponent = sideBarOptions[curIndex].render;
    return <CurrentStepComponent />;
  };

  return (
    <>
      <div className='grid grid-rows-[auto,1fr,auto] h-[100vh]'>
        <Header/>
        <div className='grid grid-cols-[1fr_5fr] max-md:grid-cols-1'>
          <div className='flex flex-col text-2xl space-y-4 max-md:flex-row max-md:space-y-0  max-md:space-x-4 items-center'>
            {
              sideBarOptions.map((e, index)=>{
                return(
                  <button key={`side_${index}`} onClick={()=>setCurIndex(index)}>{e.name}</button>
                )
              })
            }
            

          </div>
          {renderCurrentStep()}
        </div>
        <Footer/>

      </div>



    </>
  )
}
