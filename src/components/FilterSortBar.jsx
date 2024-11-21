import React from "react";

const FilterSortBar = ({ onFilterChange, onSortChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by country"
        onChange={(e) => onFilterChange(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Sorting Options */}
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="name">Sort by Name (A-Z)</option>
        <option value="cases">Sort by Cases</option>
        <option value="deaths">Sort by Deaths</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
