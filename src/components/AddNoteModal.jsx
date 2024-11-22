import React, { useState, useEffect } from "react";
import { useNotes } from "../contexts/NotesContext"; // Import NotesContext for adding notes

const AddNoteModal = ({ isOpen, onClose, country }) => {
  const [note, setNote] = useState("");
  const { addNote } = useNotes(); // Access the addNote function from context

  // Populate the note field with the existing note (if available) when the modal opens
  useEffect(() => {
    if (country) {
      setNote(country.note || ""); // Use the existing note or an empty string
    }
  }, [country]);

  const handleSave = () => {
    // Add the note using the context function
    addNote({ ...country, note });
    onClose(); // Close the modal after saving
  };

  if (!isOpen) return null; // Do not render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          Add Note for {country?.country}
        </h2>

        {/* Display country details */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p>
            <strong>Country:</strong> {country?.country}
          </p>
          <p>
            <strong>Cases:</strong> {(country?.cases || 0).toLocaleString()}
          </p>
          <p>
            <strong>Deaths:</strong> {(country?.deaths || 0).toLocaleString()}
          </p>
        </div>

        {/* Input field for adding the note */}
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Add or edit your note here..."
        ></textarea>

        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 focus:ring-2 focus:ring-gray-300 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
