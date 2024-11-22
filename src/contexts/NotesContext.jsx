import React, { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    if (!notes.some((note) => note.country === newNote.country)) {
      const updatedNotes = [...notes, { ...newNote, id: Date.now() }];
      setNotes(updatedNotes);
    }
  };

  const updateNotes = (updatedNotes) => {
    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
