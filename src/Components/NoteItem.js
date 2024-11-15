import React from 'react'

export default function NoteItem(props) {
  return (
    <div className='m-10 w-[8rem] h-[15rem] bg-pink-400 pl-5 pr-5'>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.tag}</p>
    </div>
  )
}
