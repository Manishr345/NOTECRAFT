import React from 'react';
import Note from '../Components/Note';
import AddNote from './AddNote';
import { Link } from 'react-router-dom';
import { FlipWordsDemo } from '../Components/Aceternity Components/source/FlipWords';
import { CardHoverEffectDemo } from '../Components/Aceternity Components/source/Card'

export default function Home() {
  return (
    <div className='w-full bg-black text-white'>
      <FlipWordsDemo/>
      <CardHoverEffectDemo/>
      <Link to='/about'>About</Link>
      {/* <Link to='/addnotes'>Add Notes</Link>
      <Link to='/mynotes'>My Notes</Link> */}
    </div>
  )
}