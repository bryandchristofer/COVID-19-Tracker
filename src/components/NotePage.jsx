import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../contexts/NotesContext";
import FilterSortBar from "./FilterSortBar";
import DeleteModal from "./DeleteModal";

const NotePage = () => {
  const { notes, updateNotes } = useNotes();
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  const handleDeleteConfirmation = (note) => {
    setSelectedNote(note);
    setDeleteModalOpen(true);
  };

  const handleDeleteNote = () => {
    const updatedNotes = notes.filter((note) => note.id !== selectedNote.id);
    updateNotes(updatedNotes);
    setDeleteModalOpen(false);
    setSelectedNote(null);
  };

  const handleViewDetails = (note) => {
    navigate("/note-detail", { state: { note } });
  };

  const handleEditItem = (note) => {
    navigate("/edit-note", { state: { note } });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        My Notes
      </h1>

      {/* Filter and Sort Bar */}
      <FilterSortBar data={notes} onFilterSort={setFilteredNotes} />

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-lg shadow-lg p-4 border border-gray-300"
          >
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p>
                <strong>Country:</strong> {note.country}
              </p>
              <p>
                <strong>Cases:</strong> {(note.cases || 0).toLocaleString()}
              </p>
              <p>
                <strong>Deaths:</strong> {(note.deaths || 0).toLocaleString()}
              </p>
              <p>
                <strong>Extra Note:</strong> {note.note || "N/A"}
              </p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleViewDetails(note)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              >
                See Details
              </button>
              <button
                onClick={() => handleEditItem(note)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              >
                Edit Notes
              </button>
              <button
                onClick={() => handleDeleteConfirmation(note)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none"
              >
                Delete Notes
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDeleteNote}
        itemName={selectedNote?.country}
      />
    </div>
  );
};

export default NotePage;
