import React from 'react'
import data from '@/data/data.json'
import Image from 'next/image'
import { BiCartAdd } from "react-icons/bi";
import Counter from '@/components/Counter';
const Menu = () => {
  return (
    <div className=" min-h-[calc(100vh - 80px)] grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center px-24 max-sm:px-2 py-2 gap-4">
     {data.map((item) => (
      <div className="flex flex-col gap-2 rounded-lg shadow-xl border-2 p-6 max-sm:p-4 "   key={item.id}>
        <Image src={item.image} alt={item.title} width={200} height={200} className='rounded-lg'/>    
        <h1 className='text-xl font-semibold'>{item.title}</h1>
        <p className='max-w-[200px]'>{item.description}</p>
        <p>{(item.price).toFixed(2)}PLN</p>
        <div className='w-full  flex justify-between items-center'>
          <Counter/>
        <BiCartAdd color='blue' size={40} />
        </div>
      </div>
     ))}
      </div>
  )
}

export default Menu