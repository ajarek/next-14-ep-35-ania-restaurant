import React from 'react'
import data from '@/data/data.json'
import Image from 'next/image'
import AddToCartBtn from '@/components/AddToCartBtn'
import { redirect } from 'next/navigation'
import { auth } from '@/app/api/auth/auth'
const Menu = async () => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  return (
    <div className=' min-h-[calc(100vh - 80px)] grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center px-24 max-sm:px-2 py-2 gap-4'>
      {data.map((item) => (
        <div
          className='w-full flex  gap-2 rounded-lg shadow-xl border-2 pl-4 py-4'
          key={item.id}
        >
          <div className='w-[100%] h-[300px] rounded-sm overflow-hidden max-lg:w-full '>
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className='w-full h-full object-cover rounded-lg  hover:scale-125 transition-all duration-500'
            />
            <h1 className='text-xl font-semibold'>{item.title}</h1>
            <p className='max-w-[200px]'>{item.description}</p>
            <p>
              <span className='text-xl mr-2'>{item.price.toFixed(2)}</span>PLN
            </p>
          </div>
          <div className='flex items-center pr-2'>
            <AddToCartBtn
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu
