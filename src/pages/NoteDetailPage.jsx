import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NoteDetailPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const note = state?.note;

  if (!note) {
    navigate("/notes");
    return null;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        COVID-19 Details: {note.country}
      </h1>

      {/* Item Details */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300 w-full max-w-md">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p><strong>Country:</strong> {note.country}</p>
          <p><strong>Total Cases:</strong> {(note.cases || 0).toLocaleString()}</p>
          <p><strong>Total Deaths:</strong> {(note.deaths || 0).toLocaleString()}</p>
          <p><strong>Total Recovered:</strong> {(note.recovered || 0).toLocaleString()}</p>
          <p><strong>Active Cases:</strong> {(note.active || 0).toLocaleString()}</p>
          <p><strong>Critical Cases:</strong> {(note.critical || 0).toLocaleString()}</p>
          <p><strong>Cases Today:</strong> {(note.todayCases || 0).toLocaleString()}</p>
          <p><strong>Deaths Today:</strong> {(note.todayDeaths || 0).toLocaleString()}</p>
          <p><strong>Total Tests:</strong> {(note.tests || 0).toLocaleString()}</p>
          <p><strong>Population:</strong> {(note.population || 0).toLocaleString()}</p>
        </div>

        {/* Extra Note */}
        <div className="bg-yellow-200 p-4 rounded-lg mb-6">
          <p><strong>Note:</strong></p>
          <p>{note.note || "No additional notes available."}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => navigate("/notes")}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NoteDetailPage;
