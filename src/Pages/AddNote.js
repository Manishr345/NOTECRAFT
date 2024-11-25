import React, { useState } from 'react';
import { useContext } from 'react';
import NoteContext from '../Contexts/Note/NoteContext';

export default function AddNote() {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [newNote, setNewNote] = useState({title: '', description: '', tag: ''})
    const clickSubmit = () => {
        addNote(newNote.title, newNote.description, newNote.tag);
    }
    const change = (e) => {
        setNewNote({...newNote, [e.target.name]: e.target.value});
    }
  return (
    <div>
      <label for='title'>Title</label>
      <input type='text' id='title' name='title' placeholder='Enter Title' onChange={change}/>
      <label for='description'>Description</label>
      <input type='description' id='description' name='description' placeholder='Enter Description' onChange={change}/>
      <label for='tag'>Tag</label>
      <input type='tag' id='tag' name='tag' placeholder='Enter Tag' onChange={change}/>
      <button onClick={clickSubmit}>Add Note</button>
    </div>
  )
}
