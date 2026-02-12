import React from 'react'
import { useState } from 'react';

//   const [inputName, setName] = useState("");

export default function Aside() {
    const [Name, setName] = useState("");
    
    function serch() {
        const serch = {setName};
        this.value = setName
       
        console.log(serch)
}
  return (
    <div className='flex'>
        <input type="text" value={Name}  onChange={serch(this.value)} placeholder='Search by Name..' className='border-gray-400 border-2 m-5' />
        <input type="number" placeholder='Search by Attacks..' className='border-gray-400 border-2 m-5' />
        <div type="button"  className='border-gray-400 border-2 m-5 h-7 w-45' >status Filter</div>
        <button type="button"  className='border-gray-400 border-2 m-5 h-7 w-45' >find</button>
    </div>
  )
}
