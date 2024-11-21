import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotesPage from "./components/NotesPage";

const App = () => {
  const handleAddToNotes = (country) => {
    console.log("Added to Notes:", country);
  };

  const handleViewDetails = (country) => {
    console.log("View Details:", country);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onAddToNotes={handleAddToNotes}
              onViewDetails={handleViewDetails}
            />
          }
        />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
