import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FilterSortBar from "./FilterSortBar";
import AddNoteModal from "./AddNoteModal";
import ModalDetail from "./ModalDetail";
import fetchCovidData from "../utils/fetchCovidData"; // Fetch data utility
import { getNotes, saveNote } from "../utils/localStorageUtils"; // Local storage utilities

const HomePage = () => {
  const [data, setData] = useState([]); // API data
  const [filteredData, setFilteredData] = useState([]); // Filtered and sorted data
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [sortOption, setSortOption] = useState("name"); // Sorting option
  const [isAddNoteModalOpen, setAddNoteModalOpen] = useState(false); // Add Note Modal state
  const [isDetailModalOpen, setDetailModalOpen] = useState(false); // Detail Modal state
  const [selectedCountry, setSelectedCountry] = useState(null); // Selected country for modal
  const navigate = useNavigate(); // Navigation hook

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      const covidData = await fetchCovidData();
      setData(covidData);
      setFilteredData(covidData);
    };
    fetchData();
  }, []);

  // Filter and sort data dynamically
  useEffect(() => {
    const filterAndSortData = () => {
      let updatedData = data.filter((item) =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (sortOption === "cases") {
        updatedData.sort((a, b) => b.cases - a.cases);
      } else if (sortOption === "deaths") {
        updatedData.sort((a, b) => b.deaths - a.deaths);
      } else if (sortOption === "name") {
        updatedData.sort((a, b) => a.country.localeCompare(b.country));
      }

      setFilteredData(updatedData);
    };

    filterAndSortData();
  }, [searchQuery, sortOption, data]);

  // Open the detail modal
  const handleViewDetails = (country) => {
    setSelectedCountry(country);
    setDetailModalOpen(true);
  };

  // Close the detail modal
  const handleCloseDetailModal = () => {
    setSelectedCountry(null);
    setDetailModalOpen(false);
  };

  // Open the add note modal
  const handleAddToNotes = (country) => {
    setSelectedCountry(country);
    setAddNoteModalOpen(true);
  };

  // Save the note and navigate to the Note Page
  const handleSaveNote = (noteData) => {
    saveNote(noteData); // Save to localStorage
    setAddNoteModalOpen(false); // Close modal
    navigate("/notes"); // Redirect to Note Page
  };

  // Close the add note modal
  const handleCloseAddNoteModal = () => {
    setSelectedCountry(null);
    setAddNoteModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">COVID-19 Data</h1>

      {/* Filter and Sort Bar */}
      <FilterSortBar
        onFilterChange={setSearchQuery}
        onSortChange={setSortOption}
      />

      {/* Table View */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full text-left border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">Country</th>
              <th className="p-4">Cases</th>
              <th className="p-4">Deaths</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((country, index) => (
              <tr
                key={country.country}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="p-4">{country.country}</td>
                <td className="p-4">{country.cases.toLocaleString()}</td>
                <td className="p-4">{country.deaths.toLocaleString()}</td>
                <td className="p-4 flex space-x-2">
                  {/* View Details Button */}
                  <button
                    onClick={() => handleViewDetails(country)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    Lihat Detail
                  </button>

                  {/* Add to Notes Button */}
                  <button
                    onClick={() => handleAddToNotes(country)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  >
                    Tambahkan ke Note Page
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      <ModalDetail
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetailModal}
        country={selectedCountry}
      />

      {/* Add Note Modal */}
      <AddNoteModal
        isOpen={isAddNoteModalOpen}
        onClose={handleCloseAddNoteModal}
        country={selectedCountry}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default HomePage;
