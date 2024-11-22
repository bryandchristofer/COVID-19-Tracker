import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotePage from "./components/NotePage";
import NoteDetailPage from "./components/NoteDetailPage";
import EditNotePage from "./components/EditNotePage";
import Navbar from "./components/Navbar";
import { NotesProvider } from "./contexts/NotesContext"; // Import NotesProvider

const App = () => {
  return (
    <NotesProvider>
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotePage />} />
          <Route path="/note-detail" element={<NoteDetailPage />} />
          <Route path="/edit-note" element={<EditNotePage />} />
        </Routes>
      </Router>
    </NotesProvider>
  );
};

export default App;
