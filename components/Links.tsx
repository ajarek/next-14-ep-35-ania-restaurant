'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ShoppingBasket } from 'lucide-react'
import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { usePathname } from 'next/navigation'

const Links = () => {
  const [menu, setMenu] = useState(false)
  const { cartCount } = useShoppingCart()
  const pathname = usePathname()
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
          ' flex items-center  justify-between  gap-6   bg-secondary italic'
        }
      >
        <Link
          href='/'
          className={`flex items-center gap-2 max-sm-gap-1 `}
        >
          <Image
            src='/images/logo.png'
            alt='Next.js Logo'
            width={70}
            height={70}
            className=''
          />
          <h1 className='font-semibold text-xl  '>Obiadki od Ani</h1>
        </Link>

        <div className='max-lg:hidden flex'>
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
              href='/about-us'
              className=' px-4'
            >
              O Nas
            </Link>
            <Link
              href='/contact'
              className=' px-4'
            >
              Kontakt
            </Link>
          </div>
          <Link
            className='relative flex  gap-2 mr-4'
            href='/cart'
          >
            <ShoppingBasket />
            <div className=' text-red-500  absolute -top-3 -right-2 flex justify-center items-center '>
              {cartCount}
            </div>
          </Link>
        </div>
        {menu && (
          <div className='absolute top-0 left-0 w-[200px] flex flex-col pt-20 pb-2 gap-6 bg-secondary lg:hidden'>
            <Link
              href='/menu'
              className={`${pathname === '/menu' ? 'active  px-4 py-2' : 'px-4 py-2'}`}
            >
              Menu
            </Link>
            <Link
              href='/serwis'
              className={`${pathname === '/serwis' ? 'active  px-4 py-2' : 'px-4 py-2'}`}
            >
              Serwis
            </Link>
            <Link
              href='/about-us'
              className={`${pathname === '/about-us' ? 'active  px-4 py-2' : 'px-4 py-2'}`}
            >
              O Nas
            </Link>
            <Link
              href='/contact'
              className={`${pathname === '/contact' ? 'active  px-4 py-2' : 'px-4 py-2'}`}
            >
              Kontakt
            </Link>

            <Link
              className='relative flex px-4 gap-2 '
              href='/cart'
            >
              <ShoppingBasket />
              <div className=' text-red-500  absolute -top-3 left-10  flex justify-center items-center '>
                {cartCount}
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Links
