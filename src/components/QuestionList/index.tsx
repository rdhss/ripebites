import React, { useState } from 'react'
import QuestionsCard from '../QuestionCard';

const QuestionsList = () => {
  const [currentTab, setCurrentTab] = useState<string>("Our Food");

  return (
    <div>
        <div className="grid grid-cols-2 text-header1 gap-3 px-8 justify-items-center">
          {["Our Food", "Our Delivery", "Our Company"].map((item) => (
            <>
              <button
                className={`${
                  currentTab === item
                    ? "bg-primary text-white"
                    : "border-[1px] border-black/20"
                } p-4 rounded-md w-[140px] ${item === 'Our Company' && 'col-span-2'}`}
                onClick={() => setCurrentTab(item)}
              >
                {item}
              </button>
            </>
          ))}
        </div>
        <QuestionsCard/>
    </div>
  )
}

export default QuestionsList