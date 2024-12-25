import NoteContext from "./NoteContext";
import { useContext, useState } from "react";
import UserContext from "../User/UserContext";

const NoteState = (props) => {
    const [note, setNote] = useState([]);
    const context = useContext(UserContext);

    const addNote = async (title, description, tag) => {
      const response = await fetch('http://localhost:5000/api/note/addnotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': `${context.token}`
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
            'token': `${context.token}`
          }
        });
        const json = await response.json();
        console.log(json);
        setNote(json);
      };
      const deleteNote = async (id) =>{
        const response = await fetch(`http://localhost:5000/api/note/deletenotes/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'token': `${context.token}`
          }
        })
        console.log(id);
      }
    return (
        <NoteContext.Provider value={{note, setNote, addNote, fetchNotes, deleteNote}}>
            {props.children};
        </NoteContext.Provider>
    )
};

export default NoteState;