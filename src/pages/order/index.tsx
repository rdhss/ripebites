import MenuCart from '@/components/MenuCart'
import React from 'react'

const Order = () => {
  return (
    <main className=' pt-28 grid grid-cols-1 gap-y-20 px-6'>
        <div className="">
          <h1 className="text-center mt-20 mb-10 text-6xl tracking-tight font-bold">
          Get your food <span className='text-primary'>delivered</span>, or <span className='text-primary'>pick-up</span> in store.
          </h1>
          <p className="text-muted text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500.
          </p>
          <div className="mt-7 w-full">
            <MenuCart path='order'/>
          </div>
        </div>
    </main>
  )
}

export default Order