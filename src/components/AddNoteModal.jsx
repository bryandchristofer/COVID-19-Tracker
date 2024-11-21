import React, { useState } from "react";

const AddNoteModal = ({ isOpen, onClose, country, onSave }) => {
  const [note, setNote] = useState(""); // State to hold the extra note input

  if (!isOpen) return null; // Do not render if the modal is not open

  const handleSave = () => {
    // Pass the new note and country details back to the parent
    onSave({ ...country, note });
    setNote(""); // Clear the input
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/2 p-6">
        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Add {country?.country || "N/A"}
        </h2>

        {/* Item Detail Info */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p><strong>Country:</strong> {country?.country}</p>
          <p><strong>Cases:</strong> {country?.cases.toLocaleString()}</p>
          <p><strong>Deaths:</strong> {country?.deaths.toLocaleString()}</p>
          <p><strong>Recovered:</strong> {country?.recovered.toLocaleString()}</p>
        </div>

        {/* Input Field for Extra Note */}
        <textarea
          placeholder="Input Extra Note Here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border-2 border-yellow-400 p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
