import React from 'react'

export default function NoteItem(props) {
  return (
    <div className='m-10 w-[8rem] h-[15rem] bg-pink-400 pl-5 pr-5 rounded-lg border-black border-2'>
      <p className='font-bold mb-3'>{props.title}</p>
      <hr/>
      <p className='mb-3'>{props.description}</p>
      <hr/>
      <p className='mt-3'>{props.tag}</p>
    </div>
  )
}
