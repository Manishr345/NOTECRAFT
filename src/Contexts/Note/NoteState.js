import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const [note, setNote] = useState([]);

    const addNote = async (title, description, tag) => {
      const response = await fetch('http://localhost:5000/api/note/addnotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyZTEzODIzM2YyNzhlY2Q2OTkxYjJmIn0sImlhdCI6MTczMTA3MzkyMn0.q_B_HK-SzM2n-GdU6ZiJfb4YMD__Lr-fUWQ1atnCexU'
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = response.json();
      // setNote(json.note);
      console.log(json);
    }

    const fetchNotes = async () => {
        const response = await fetch('http://localhost:5000/api/note/fetchnotes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyZTEzODIzM2YyNzhlY2Q2OTkxYjJmIn0sImlhdCI6MTczMTA3MzkyMn0.q_B_HK-SzM2n-GdU6ZiJfb4YMD__Lr-fUWQ1atnCexU'
          }
        });
        const json = await response.json();
        console.log(json);
        setNote(json);
      };
    return (
        <NoteContext.Provider value={{note, setNote, addNote, fetchNotes}}>
            {props.children};
        </NoteContext.Provider>
    )
};

export default NoteState;