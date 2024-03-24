'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
const Links = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div
        className='absolute left-1 top-6 lg:hidden cursor-pointer z-10'
        onClick={() => setMenu(!menu)}
      >
        {menu ? (
          <X
            size={24}
            color='red'
          />
        ) : (
          <Menu size={24} />
        )}
      </div>
      <div
        className={
          menu
            ? ' w-3/4 flex items-center  justify-between  gap-6  bg-secondary italic '
            : 'w-3/4 flex items-center  justify-between  gap-6   bg-secondary italic'
        }
      >
        <Link
          href='/'
          className='flex items-center gap-2'
        >
          <Image
            src='/images/logo.png'
            alt='Next.js Logo'
            width={60}
            height={60}
            className='rotate-[30deg]'
          />
          <h1 className='font-semibold text-xl  '>Obiadki u Ani</h1>
        </Link>
        <div className='flex items-center gap-6'>
          <Link
            href='/menu'
            className=' px-4'
          >
            Menu
          </Link>
          <Link
            href='/serwis'
            className=' px-4'
          >
            Serwis
          </Link>
          <Link
            href='/serwis'
            className=' px-4'
          >
            O Nas
          </Link>
          <Link
            href='/serwis'
            className=' px-4'
          >
            Kontakt
          </Link>
        </div>
      </div>
    </>
  )
}

export default Links
