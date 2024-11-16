import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

export default function Home() {
  return (
    <div>
      <AddNote/>
      <Note/>
    </div>
  )
}
