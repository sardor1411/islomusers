
import './App.css'
import React, { useState } from 'react';
import { IoTrash } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus,  } from "react-icons/ci";

import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from "react-icons/cg";



import { GrClear } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";



function App() {


    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
    };

    const minus = () => {
      if(count > 0){
        setCount(count - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    const back = () => {
      if(count > 0 && count > 10){
          setCount(count - 10);
        }
    }


    const next = () => {
      setCount(count + 10)
    }


  return (
    <div className="counter">
       <div className='mt-[10%]'>
        <pre className='text-[25px] text-amber-600'>#Counter</pre>
        <pre className=' mt-[20px] from-neutral-800 text-[100px] text-blue-950'>{count}</pre>
        <div className='m-[30px]'>
        <CgChevronDoubleLeftO className='m-5 inline-block bg text-[50px] text-blue-800' onClick={back}/>
        <CiCircleMinus className='m-5 inline-block bg text-[50px] text-blue-800' onClick={minus}/>
        <CiCirclePlus className='m-5 inline-block bg text-[50px] text-blue-800' onClick={plus}/>
        <CgChevronDoubleRightO className='m-5 inline-block bg text-[50px] text-blue-800' onClick={next}/>

        </div>
        <GrClear className=' m-2 inline-block bg text-[30px] text-red-800' onClick={reset}/>


       </div>
    </div>
  )
}

export default App
