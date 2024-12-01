import React, { useState } from 'react';
import { useContext } from 'react';
import NoteContext from '../Contexts/Note/NoteContext';
import { PlaceholdersAndVanishInput } from '../Components/Aceternity Components/support/placeholders-and-vanish-input';

export default function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [newNote, setNewNote] = useState({ title: '', description: '', tag: '' })
  const change = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  }
  const [inputVanish, setInputVanish] = useState(false);

  const handleDescriptionSubmit = () => {
    addNote(newNote.title, newNote.description, newNote.tag);
    setInputVanish(true);
    setTimeout(() => setInputVanish(false), 300);
  };
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  
  return (
    <div className='text-white'>
      <div className='flex flex-col justify-center'>
        <label for='tag' className='mt-52 mb-5 flex justify-center'>Tag</label>
        <PlaceholdersAndVanishInput placeholders={placeholders} id='tag' name='tag' change={change} onSubmit={handleDescriptionSubmit} vanish={inputVanish}/>
      </div>
      <div className='flex flex-col justify-center'>
        <label for='title' className='mt-14 mb-5 flex justify-center'>Title</label>
        <PlaceholdersAndVanishInput placeholders={placeholders} id='title' name='title' change={change} onSubmit={handleDescriptionSubmit} vanish={inputVanish}/>
      </div>
      <div className='flex flex-col justify-center'>
        <label for='description' className='mt-14 mb-5 flex justify-center'>Description</label>
        <PlaceholdersAndVanishInput placeholders={placeholders} id='description' name='description' change={change} onSubmit={handleDescriptionSubmit} vanish={inputVanish}/>
      </div>
    </div>
  )
}
