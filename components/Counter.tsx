'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { FaPlus, FaMinus  } from "react-icons/fa";

const Counter = () => {
  const [count, setCount] = useState(1)
  return (
    
    <div className='flex items-center'>
      <Button onClick={() => setCount(count + 1)}><FaPlus /></Button>
      <div className='w-10 h-10 flex justify-center items-center border-2 rounded-xl'>{count}</div>
      <Button onClick={() => setCount(count - 1)}><FaMinus /></Button>  
    </div>
  )
}

export default Counter