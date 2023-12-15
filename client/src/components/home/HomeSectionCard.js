



import React from 'react'

const HomeSectionCard = ({props}) => {
  return (
    <div className='cursor-pointer border-2  h-[350px] flex flex-col mr-8 items-center  overflow-hidden w-full px-4'>

      <div className='border-2 '>
      <div className=" h-[12rem] w-full">
            <img className='object-cover  h-full w-full' src={props.img}/>
        </div>
       <div>
        <p className='text-white'>{props.creater}</p>
        <p className='text-white'>
         fee :  {props.price}
        </p>
       </div>
      </div>

    </div>
  )
}

export default HomeSectionCard
