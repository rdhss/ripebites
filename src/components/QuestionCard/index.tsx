import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { questionFood } from '@/menu'

interface props {
  item : string
}

const QuestionsCard = ({item} : props) => {
  const [spread, setSpread] = useState<boolean>(false)

  return (
    <div className=''>
      <div onClick={()=>setSpread(!spread)} className='flex border-b-[1px] border-primary p-5 text-primary font-bold justify-between'>
        <h1>{item}</h1>   
        <FontAwesomeIcon icon={faSquarePlus} width={20}/>      
      </div>
      {spread &&
      <div className='p-5 text-muted'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ex, sint quis aperiam nam quod mollitia iusto corrupti odit assumenda eius totam pariatur soluta facilis natus expedita laudantium aspernatur dolorum!
      </div>
      }
    </div>
  )
}

export default QuestionsCard