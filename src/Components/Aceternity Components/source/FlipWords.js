import React from "react";
import { FlipWords } from "../support/flip-words";
import { AnimatedTestimonialsDemo } from "./CardStack";

export function FlipWordsDemo() {
  const words = ["Smarter", "Organized", "Productive", "Efficient"];

  return (
    (<div className="bg-black w-full h-screen lg:h-[40rem] flex flex-col lg:flex-row justify-center items-center px-4">
      <AnimatedTestimonialsDemo/>
      <div
        className="text-4xl lg:mx-auto mt-0 font-normal text-neutral-600 lg:mr-20 dark:text-neutral-400">
        Your Digital Notebook for a
        <br /><FlipWords words={words} /> 
        Life
      </div>
    </div>)
  );
}
