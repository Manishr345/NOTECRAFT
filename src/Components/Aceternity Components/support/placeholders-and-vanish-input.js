import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PlaceholdersAndVanishInput({
  placeholders,
  onSubmit,
  name,
  id,
  change, // Your custom change function
  vanish, // This prop controls if the input should vanish
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState("");

  // Cycle through placeholders every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholders]);

  // Clear input value if vanish is true
  useEffect(() => {
    if (vanish) {
      setValue(""); // Clear the input value
    }
  }, [vanish]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(value); // Pass the value to the parent
    }
    setValue(""); // Clear the input after submission
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue); // Update the local state
    if (change) {
      change(e); // Call the `change` function with the event
    }
  };

  return (
    <form
      className="w-full relative max-w-xl mx-auto bg-white dark:bg-zinc-800 h-15 rounded-2xl overflow-hidden shadow-lg transition duration-200"
      onSubmit={handleSubmit}
    >
      {/* Text Area */}
      <textarea
        value={value}
        onChange={handleChange} // Use the combined handler
        name={name}
        id={id}
        className={`w-full relative text-sm z-50 border-none dark:text-white bg-transparent text-black h-full rounded-lg focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20 ${
          vanish ? "opacity-0" : "opacity-100"
        }`}
        style={{
          pointerEvents: vanish ? "none" : "auto", // Disable input when vanishing
        }}
      />
      {/* Submit Button (only for description input) */}
      {name === "description" && (
        <button
          type="submit"
          disabled={!value}
          className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 transition duration-200 flex items-center justify-center"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-300 h-4 w-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
              d="M5 12l14 0"
              initial={{ strokeDasharray: "50%", strokeDashoffset: "50%" }}
              animate={{ strokeDashoffset: value ? 0 : "50%" }}
              transition={{ duration: 0.3, ease: "linear" }}
            />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </motion.svg>
        </button>
      )}
      {/* Placeholder Animation */}
      <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
        <AnimatePresence mode="wait">
          {/* Show placeholder only when input is empty */}
          {!value && (
            <motion.p
              key={currentPlaceholder}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
