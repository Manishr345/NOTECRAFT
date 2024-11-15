import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const [note, setNote] = useState([
        {
            "_id": "6727f6cfbb66b3c252d13f90d",
            "user": "672e138233f278ecd6991b2f",
            "title": "I am anotherone",
            "description": "This is my second note",
            "tag": "personal",
            "date": "2024-11-09T14:08:59.629Z",
            "__v": 0
          },
          {
            "_id": "672f6cfbb66b3c252d130f90d",
            "user": "672e138233f278ecd6991b2f",
            "title": "I am anotherone",
            "description": "This is my second note",
            "tag": "personal",
            "date": "2024-11-09T14:08:59.629Z",
            "__v": 0
          },
          {
            "_id": "672f6cfbb66b3c252d13f190d",
            "user": "672e138233f278ecd6991b2f",
            "title": "I am anotherone",
            "description": "This is my second note",
            "tag": "personal",
            "date": "2024-11-09T14:08:59.629Z",
            "__v": 0
          },
          {
            "_id": "672f6cfbb636b3c252d13f90d",
            "user": "672e138233f278ecd6991b2f",
            "title": "I am anotherone",
            "description": "This is my second note",
            "tag": "personal",
            "date": "2024-11-09T14:08:59.629Z",
            "__v": 0
          },
          {
            "_id": "6723f6cfbb66b3c252d13f90d",
            "user": "672e138233f278ecd6991b2f",
            "title": "I am anotherone",
            "description": "This is my second note",
            "tag": "personal",
            "date": "2024-11-09T14:08:59.629Z",
            "__v": 0
          }
    ])
    return (
        <NoteContext.Provider value={{note, setNote}}>
            {props.children};
        </NoteContext.Provider>
    )
};

export default NoteState;