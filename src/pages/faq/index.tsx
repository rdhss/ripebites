import QuestionsList from '@/components/QuestionList'
import React from 'react'

const Faq = () => {
  return (
    <main className=' pt-28 grid grid-cols-1 gap-y-20 px-6'>
        <div className="">
          <h1 className="text-center mt-20 mb-10 text-6xl tracking-tight font-bold">
            Frequently Asked <span className='text-primary'>Questions</span>
          </h1>

        </div>
        <QuestionsList/>
    </main>
  )
}

export default Faq