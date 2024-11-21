import React, { useState } from "react";
import ModalDetail from "./ModalDetail"; // For viewing details
import AddNoteModal from "./AddNoteModal"; // For editing notes

const NotePage = ({ notes, onUpdateNotes }) => {
  const [filteredNotes, setFilteredNotes] = useState(notes); // Filtered and sorted notes
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const [sortOption, setSortOption] = useState("name"); // Sorting option state
  const [selectedNote, setSelectedNote] = useState(null); // Note for detail or edit
  const [isDetailModalOpen, setDetailModalOpen] = useState(false); // Detail Modal state
  const [isEditModalOpen, setEditModalOpen] = useState(false); // Edit Modal state

  // Handle search filtering
  const handleFilter = (query) => {
    setSearchQuery(query);
    const filtered = notes.filter((note) =>
      note.country.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  // Handle sorting
  const handleSort = (option) => {
    setSortOption(option);
    const sorted = [...filteredNotes].sort((a, b) => {
      if (option === "name") return a.country.localeCompare(b.country);
      if (option === "cases") return b.cases - a.cases;
      if (option === "deaths") return b.deaths - a.deaths;
      return 0;
    });
    setFilteredNotes(sorted);
  };

  // Handle delete note
  const handleDelete = (note) => {
    const updatedNotes = notes.filter((n) => n.id !== note.id);
    onUpdateNotes(updatedNotes); // Pass the updated notes back to parent
    setFilteredNotes(updatedNotes); // Update the displayed notes
  };

  // Open detail modal
  const handleViewDetails = (note) => {
    setSelectedNote(note);
    setDetailModalOpen(true);
  };

  // Open edit modal
  const handleEditItem = (note) => {
    setSelectedNote(note);
    setEditModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">My Notes</h1>

      {/* Filter and Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by country"
          value={searchQuery}
          onChange={(e) => handleFilter(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Sorting Options */}
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Sort by Name (A-Z)</option>
          <option value="cases">Sort by Cases</option>
          <option value="deaths">Sort by Deaths</option>
        </select>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-lg shadow-lg p-4 border border-gray-300"
          >
            {/* Note Details */}
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p><strong>Country:</strong> {note.country}</p>
              <p><strong>Cases:</strong> {note.cases.toLocaleString()}</p>
              <p><strong>Extra Note:</strong> {note.note || "N/A"}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => handleViewDetails(note)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              >
                Lihat Detail
              </button>
              <button
                onClick={() => handleEditItem(note)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              >
                Edit Item
              </button>
              <button
                onClick={() => handleDelete(note)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none"
              >
                Hapus Item
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <ModalDetail
        isOpen={isDetailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        country={selectedNote}
      />

      {/* Edit Modal */}
      <AddNoteModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        country={selectedNote}
        onSave={(updatedNote) => {
          const updatedNotes = notes.map((n) =>
            n.id === updatedNote.id ? updatedNote : n
          );
          onUpdateNotes(updatedNotes); // Update notes in parent
          setFilteredNotes(updatedNotes); // Update displayed notes
          setEditModalOpen(false); // Close modal
        }}
      />
    </div>
  );
};

export default NotePage;
