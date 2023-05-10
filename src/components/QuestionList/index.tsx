import React, { useState } from 'react'
import QuestionsCard from '../QuestionCard';
import { questionFood } from '@/menu';
import { useSpring, animated } from '@react-spring/web';

const QuestionsList = () => {
  const [currentTab, setCurrentTab] = useState<string>("Our Food");
  const [fading, setFading] = useState<boolean>(true)


  const fade = useSpring({
    opacity : fading ? 1 : 0,
  })


  const handleChangetab = (item : string) => {
      setFading(false)
      setTimeout(() => {
        setFading(true)
        setCurrentTab(item)
      }, 200);
  } 


  return (
    <div className='md:px-64'>
        <div className="grid grid-cols-2 md:grid-cols-3 text-header1 gap-3 px-8 justify-items-center ">
          {["Our Food", "Our Delivery", "Our Company"].map((item) => (
            <>
              <button
                className={`${
                  currentTab === item
                    ? "bg-primary text-white"
                    : "border-[1px] border-black/20"
                } p-4 rounded-md w-[140px] md:w-48 ${item === 'Our Company' && 'col-span-2 md:col-span-1'}`}
                onClick={() => handleChangetab(item)}
              >
                {item}
              </button>
            </>
          ))}
        </div>
        <animated.div style={fade} className=' my-24'> 
        {questionFood.map(item => 
        <QuestionsCard item={item}/>
          )}
        </animated.div>
    </div>
  )
}

export default QuestionsList