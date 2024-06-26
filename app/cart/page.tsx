'use client'

import { useShoppingCart } from 'use-shopping-cart'
import CheckoutBtn from '@/components/CheckoutBtn'
import Image from 'next/image'
const Cart = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
    removeItem,
    incrementItem,
    decrementItem,
  } = useShoppingCart()

  return (
    <main className='flex  min-h-[calc(100vh - 80px)] flex-col items-center justify-between px-12 py-4 max-lg:px-4 max-sm:px-2 scrollbar-thumb-blue-500 scrollbar-thin scrollbar-thumb-rounder scrollbar-track-white '>
      {cartCount === 0 ? (
        <div>Twój koszyk jest pusty.</div>
      ) : (
        <>
          <div className='h-[350px] w-full border-2 p-4 max-sm:p-2 scrollbar-thin  overflow-y-scroll gap-4'>
            {cartDetails &&
              Object.entries(cartDetails).map(([key, item]) => {
                return (
                  <div
                    key={key}
                    className='w-full grid grid-cols-5 gap-2 border-b p-2 max-sm:p-0 place-items-center'
                  >
                    <div>
                      <Image
                        src={item.image || ''}
                        alt={item.title || ''}
                        width={50}
                        height={50}
                      />
                    </div>

                    <h5>{item.title}</h5>
                    <div>
                      <div className='flex gap-2'>
                        <button onClick={() => decrementItem(item.id)}>
                          ➖
                        </button>
                        <div>{item.quantity}</div>
                        <button onClick={() => incrementItem(item.id)}>
                          ➕
                        </button>
                      </div>
                    </div>
                    <div>{(item.price * item.quantity).toFixed(2)}</div>
                    <div>
                      <button onClick={() => removeItem(item.id)}>❌</button>
                    </div>
                  </div>
                )
              })}
          </div>

          <div className='flex flex-col  w-full '>
            <div className='flex gap-4 items-center justify-end'>
              <div>Razem</div>
              <div className='text-xl'>${Number(totalPrice).toFixed(2)}</div>
            </div>
            <div className='flex  items-center justify-end mt-4'>
              <CheckoutBtn />
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default Cart
