import React, { useEffect } from 'react';
import { useContext } from 'react';
import NoteContext from '../Contexts/Note/NoteContext';
import NoteItem from './NoteItem';

export default function Note() {
  const context = useContext(NoteContext);
  useEffect(() => {
    context.fetchNotes();
  }, [])
  return (
    <div className='flex'>
      {Array.isArray(context.note) && context.note.map((notes) => {
        return <NoteItem key={notes._id} title={notes.title} description={notes.description} tag={notes.tag} />
      })}
    </div>
  )
}
