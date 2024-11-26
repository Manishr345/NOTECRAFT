import React, { useEffect } from "react";
import { Carousel, Card } from "../support/apple-cards-carousel";
import NoteContext from "../../../Contexts/Note/NoteContext";
import { useContext } from "react";

export function AppleCardsCarouselDemo() {
    const context = useContext(NoteContext);
    useEffect(() => {
        context.fetchNotes();
    },[]);
  const cards = context.note.map((notes, index) => (
    <Card key={notes._id} card={notes} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>)
  );
}

