import React from 'react';
import NoteContext from '../Contexts/Note/NoteContext';
import { useContext } from 'react';

export default function NoteItem(props) {
  const context = useContext(NoteContext);
  return (
    <div className='m-10 w-[8rem] h-[15rem] bg-pink-400 pl-5 pr-5 rounded-lg border-black border-2'>
      <p className='font-bold mb-3'>{props.title}</p>
      <hr/>
      <p className='mb-3'>{props.description}</p>
      <hr/>
      <p className='mt-3'>{props.tag}</p>
      <div>
        <button onClick={() => context.deleteNote(props.id)}>Delete</button>
      </div>
    </div>
  )
}
