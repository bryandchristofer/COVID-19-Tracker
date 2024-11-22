import React, { useState, useEffect } from "react";
import FilterSortBar from "../components/FilterSortBar";
import AddNoteModal from "../components/AddNoteModal";
import ModalDetail from "../components/ModalDetail";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isAddNoteModalOpen, setAddNoteModalOpen] = useState(false);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const result = await response.json();
      setData(result);
      setFilteredData(result);
    };
    fetchData();
  }, []);

  const handleViewDetails = (country) => {
    setSelectedCountry(country);
    setDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedCountry(null);
    setDetailModalOpen(false);
  };

  const handleAddToNotes = (country) => {
    setSelectedCountry(country);
    setAddNoteModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        COVID-19 Data
      </h1>

      {/* Filter and Sort Bar */}
      <FilterSortBar data={data} onFilterSort={setFilteredData} />

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
                  <button
                    onClick={() => handleViewDetails(country)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    See Details
                  </button>
                  <button
                    onClick={() => handleAddToNotes(country)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  >
                    Add Notes
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
        onClose={() => setAddNoteModalOpen(false)}
        country={selectedCountry}
      />
    </div>
  );
};

export default HomePage;
