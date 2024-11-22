import React, { createContext, useContext, useEffect, useState } from "react";

// Create the Notes Context
const NotesContext = createContext();

// Custom Hook to use the Notes Context
export const useNotes = () => useContext(NotesContext);

// NotesProvider Component
export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    // Prevent duplicates
    if (!notes.some((note) => note.country === newNote.country)) {
      const updatedNotes = [...notes, { ...newNote, id: Date.now() }];
      setNotes(updatedNotes); // Update context state
    }
  };

  // Update notes (e.g., edit or delete actions)
  const updateNotes = (updatedNotes) => {
    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
