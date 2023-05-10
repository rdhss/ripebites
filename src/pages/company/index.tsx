import React from 'react'
import company from '../../assets/images/company.png'
import Image from 'next/image'
import stringImg from '../../assets/images/string.svg'

const Company = () => {
  return (
    <main className=' pt-28 grid grid-cols-1 gap-y-20'>
        <div className="px-6 md:px-80">
          <h1 className="text-center mt-20 mb-10 text-6xl tracking-tight font-bold">
          Our company focuses on <span className='text-primary'>food and people.</span>
          </h1>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-20 bg-primary/[0.02] mt-14 pb-16">
        <div className='px-6 md:px-14 md:flex md:justify-center md:flex-col'>
          <h1 className="text-center md:text-left mt-20 mb-10 text-primary text-5xl tracking-tight font-bold">
            The home of fresh products
          </h1>
          <p className="text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500.{" "}
          </p>
          <div className="w-full flex justify-center pt-6 md:justify-start">
            <button className="bg-primary text-white text-xl px-6 py-4 rounded-md text-center">
              Learn about us
            </button>
          </div>
        </div>

        <div className='px-6'>
          <Image src={company} alt="hero"  className='md:w-[34rem]'/>
        </div>

        <div className="bg-company w-full md:w-screen grid grid-cols-2 md:grid-cols-4 p-9 py-32 gap-x-5 gap-y-20">
            <div className='flex items-center flex-col gap-2'>
                <p className='text-white text-8xl font-bold'>62</p>
                <Image src={stringImg} alt='img'/>
                <p className='text-white text-xl'>Fleasty Meat Items</p>
            </div>
            <div className='flex items-center flex-col gap-2'>
                <p className='text-white text-8xl font-bold'>139</p>
                <Image src={stringImg} alt='img'/>
                <p className='text-white text-xl'>Fleasty Meat Items</p>
            </div>
            <div className='flex items-center flex-col gap-2'>
                <p className='text-white text-8xl font-bold'>34</p>
                <Image src={stringImg} alt='img'/>
                <p className='text-white text-xl'>Fleasty Meat Items</p>
            </div>
            <div className='flex items-center flex-col gap-2'>
                <p className='text-white text-8xl font-bold'>57</p>
                <Image src={stringImg} alt='img'/>
                <p className='text-white text-xl'>Fleasty Meat Items</p>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Company