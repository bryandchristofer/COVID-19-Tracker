import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotePage from "./components/NotePage";

const App = () => {
  const [notes, setNotes] = useState([]); // State to manage saved notes

  // Function to handle adding a new note
  const handleAddToNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, { ...newNote, id: Date.now() }]); // Add unique ID
  };

  // Function to handle viewing details (this will be passed to the HomePage)
  const handleViewDetails = (country) => {
    console.log("View Details:", country); // Currently logs, but could show a modal or page
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
          element={
            <HomePage
              onAddToNotes={handleAddToNotes}
              onViewDetails={handleViewDetails}
            />
          }
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
