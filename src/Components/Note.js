import React from 'react';
import { useContext } from 'react';
import NoteContext from '../Contexts/Note/NoteContext';
import NoteItem from './NoteItem';

export default function Note() {
    const context = useContext(NoteContext);
  return (
    <div className='flex'>
      {context.note.map((notes, key=notes._id) => {
        return <NoteItem title={notes.title} description={notes.description} tag={notes.tag}/>
      })}
    </div>
  )
}
