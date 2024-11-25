import React from 'react';
import Note from '../Components/Note';
import AddNote from './AddNote';
import { Link } from 'react-router-dom';
import { FlipWordsDemo } from '../Components/Aceternity Components/source/FlipWords';

export default function Home() {
  return (
    <div className='flex space-x-10 w-full'>
      <FlipWordsDemo/>
      {/* <Link to='/addnotes'>Add Notes</Link>
      <Link to='/mynotes'>My Notes</Link> */}
    </div>
  )
}
