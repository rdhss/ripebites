import MenuCart from '@/components/MenuCart'
import React from 'react'

const Order = () => {
  return (
    <main className=' pt-28 grid grid-cols-1 gap-y-20 px-6'>
        <div className="">
          <h1 className="text-center mt-20 mb-10 md:px-72 text-6xl tracking-tight font-bold">
          Get your food <span className='text-primary'>delivered</span>, or <span className='text-primary'>pick-up</span> in store.
          </h1>
          <div className="mt-7 w-full md:mt-28">
            <MenuCart path='order'/>
          </div>
        </div>
    </main>
  )
}

export default Order