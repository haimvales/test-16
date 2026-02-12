import React from 'react'
import {useState} from 'react'
import { Children } from 'react';

import arr_terrorists from '../data/data.json'


export default function Contend({ children }) {
    // const [arr_terrorists,setName] = useState()
    // const arr_terrorists = terrorists_data
// console.log(children);


  return (
    <div className=' border-2 p-1 w-screen'>

        {arr_terrorists.map((child,i) =>{
            // console.log(child)
            return <div key={i} className='justify-items-center items-center content-center justify-center'>
              <div className='border flex gap-5'>
            <img src={child.imageUrl||"https://i.ibb.co/Hpf9JhhF/12.png"} alt="" />
            <p>{child.name}</p>
            <p>{child.organization}</p>
            <p className='bg-blue-700  self-center'>attacks</p>
            <p>{child.attacksCount}</p>
            <p className='bg-red-800  self-center'>{child.status}</p>
            <p>{child.relationToIsraelSummary}</p>
            <i></i>
         
              
              
              
            </div></div>
          }
      )}

    </div>
  )
}

        {/* <img src="https://i.ibb.co/Hpf9JhhF/12.png" alt="" /> */}
        {/* <p  >{arr_terrorists[0].name}</p> */}

// import the entire object
// import json from './example.json'
// import a root field as named exports - helps with tree-shaking!
// import { field } from './example.json'