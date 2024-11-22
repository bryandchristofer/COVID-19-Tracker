import React, { useState, useEffect } from "react";

const FilterSortBar = ({ data, onFilterSort }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  useEffect(() => {
    const filterAndSortData = () => {
      let updatedData = [...data]; // Create a copy to avoid mutating the original array

      // Apply search filter
      if (searchQuery) {
        updatedData = updatedData.filter((item) =>
          item.country.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Apply sorting
      switch (sortOption) {
        case "name-asc":
          updatedData.sort((a, b) => a.country.localeCompare(b.country));
          break;
        case "name-desc":
          updatedData.sort((a, b) => b.country.localeCompare(a.country));
          break;
        case "cases-asc":
          updatedData.sort((a, b) => a.cases - b.cases);
          break;
        case "cases-desc":
          updatedData.sort((a, b) => b.cases - a.cases);
          break;
        case "deaths-asc":
          updatedData.sort((a, b) => a.deaths - b.deaths);
          break;
        case "deaths-desc":
          updatedData.sort((a, b) => b.deaths - a.deaths);
          break;
        default:
          break;
      }

      onFilterSort(updatedData); // Pass the updated data back to the parent
    };

    filterAndSortData(); // Call filtering and sorting whenever dependencies change
  }, [data, searchQuery, sortOption, onFilterSort]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by country"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Sorting Options */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="name-asc">Sort by Name (A-Z)</option>
        <option value="name-desc">Sort by Name (Z-A)</option>
        <option value="cases-asc">Sort by Cases (Ascending)</option>
        <option value="cases-desc">Sort by Cases (Descending)</option>
        <option value="deaths-asc">Sort by Deaths (Ascending)</option>
        <option value="deaths-desc">Sort by Deaths (Descending)</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
