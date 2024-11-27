import { HoverEffect } from "../support/card-hover-effect";
import NoteContext from "../../../Contexts/Note/NoteContext";
import { useContext, useEffect } from "react";
import { LinkPreviewDemo } from "./Link";

export function CardHoverEffectDemo() {
    const context = useContext(NoteContext);
    useEffect(() => {
        context.fetchNotes();
    },[])
  return (
  <div className="max-w-5xl bg-black w-full h-screen mx-auto px-8">
      <LinkPreviewDemo content='My Notes' url="http://localhost:3000/mynotes" image="/mynotes.png"/>
      <HoverEffect items={context.note}/>
    </div>
  );
}
