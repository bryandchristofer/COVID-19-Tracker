import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import EditNotePage from "./pages/EditNotePage";
import Navbar from "./components/Navbar";
import { NotesProvider } from "./contexts/NotesContext";

const App = () => {
  return (
    <NotesProvider>
      <Router>
        <Navbar />

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
