import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Random() {

 const { gif,loading,fetchData}=useGif();

  return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-xl mt-[15px] font-bold underline uppercase '>A Random GIf</h1>

      {

        loading ? <Spinner/> :  <img src={gif}  width="450" />
      }

      <button onClick={()=>fetchData()} className='w-10/12 bg-white opacity-75 font-bold text-lg py-2 rounded-lg mt-[20px]'>

        Generate 
      
      </button>
    </div>
  )
}
