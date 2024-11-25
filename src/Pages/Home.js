import React from 'react';
import Note from '../Components/Note';
import AddNote from './AddNote';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='flex space-x-10'>
      <Link to='/addnotes'>Add Notes</Link>
      <Link to='/mynotes'>My Notes</Link>
    </div>
  )
}
