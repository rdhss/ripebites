import React from 'react'
import Image from 'next/image'


interface props {
  head : string;
  title : string;
  images : string;
}
let test = 'step01.png'
const Steps = ({head, title, images} : props) => {
  return (
    <div className='flex flex-col items-center text-center px-7'>
        <Image
            src={require(`../../assets/images/${images}`)}
            alt="test"
          />
        <h1 className='text-2xl font-bold mt-7'>{head}</h1>
        <p className='text-lg text-muted mt-2'>{title}</p>
    </div>
  )
}

export default Steps