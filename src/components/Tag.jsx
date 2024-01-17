import React ,{useState} from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Tag() {


  const[tag,setTag]=useState('');
  const {gif,loading,fetchData}=useGif(tag);



  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-xl mt-[15px] font-bold underline uppercase '> Random {tag} GIf</h1>

      {

        loading ? (<Spinner/>) : (  <img src={gif}  width="450" />)
      }
      <input type='text' 
      className='w-10/12 text-lg py-2 rounded-lg text-center '
      onChange={(event)=>setTag(event.target.value)}
      value={tag}/>

      <button onClick={()=> fetchData()} className='w-10/12 bg-white opacity-75 font-bold text-lg py-2 rounded-lg mt-[20px]'>
        Generate 
      </button>
    </div>
  )
}
