import { HoverEffect } from "../support/card-hover-effect";
import NoteContext from "../../../Contexts/Note/NoteContext";
import { useContext, useEffect } from "react";

export function CardHoverEffectDemo() {
    const context = useContext(NoteContext);
    useEffect(() => {
        context.fetchNotes();
    },[])
  return (
  <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={context.note} />
    </div>
  );
}
