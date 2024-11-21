import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotePage from "./components/NotePage";

const App = () => {
  const [notes, setNotes] = useState([]); // State to manage saved notes

  // Load notes from local storage on app start
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Function to handle adding a new note
  const handleAddToNotes = (newNote) => {
    // Avoid duplicates by checking if the country already exists in notes
    if (!notes.some((note) => note.country === newNote.country)) {
      setNotes((prevNotes) => [...prevNotes, { ...newNote, id: Date.now() }]); // Add unique ID
    }
  };

  // Function to update notes (used for edit/delete actions in NotePage)
  const handleUpdateNotes = (updatedNotes) => {
    setNotes(updatedNotes); // Replace notes with the updated list
  };

  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={<HomePage onAddToNotes={handleAddToNotes} />}
        />

        {/* Notes Page Route */}
        <Route
          path="/notes"
          element={<NotePage notes={notes} onUpdateNotes={handleUpdateNotes} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
