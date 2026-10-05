import React from 'react'
import RightCard from './RighCard'

const RightContent = (props) => {
  
  return (
    <div className='h-full  p-6 w-3/4 flex flex-nowrap gap-4 overflow-x-auto scrollbar-none'>
      {props.users.map(function(props,idx){
        return <RightCard key={idx} id={idx} color={props.color} img={props.img} tag={props.tag} />
      })}
    </div>
  )
}

export default RightContent
