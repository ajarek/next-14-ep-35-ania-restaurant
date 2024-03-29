import React from 'react'
import Link from 'next/link'

const BestDishes = () => {
  return (
    <div className='w-full  flex flex-col gap-8  italic mt-20 '>
      <h1 className=' text-2xl text-center font-semibold  '>
        Najszybsza dostawa najlepszych obiadów w Kołobrzegu!
      </h1>
      <p className='text-center  text-xl '>
        Zanurz się w smakach , dostarczonych z szybkością błyskawicy! Poznaj
        Obiadki u Ani – najszybszą drogę do autentycznych przysmaków z naszego
        miasta.
      </p>
      <Link href={'/menu'} className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-fit self-end'>Zamów teraz</Link>
    </div>
  )
}

export default BestDishes
