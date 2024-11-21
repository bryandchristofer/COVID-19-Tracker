import React from "react";

const ModalDetail = ({ isOpen, onClose, country }) => {
  if (!isOpen) return null; // Do not render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/2 p-6">
        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Detail of {country?.country || "N/A"}
        </h2>

        {/* Item Detail Info */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p><strong>Country:</strong> {country?.country}</p>
          <p><strong>Cases:</strong> {country?.cases.toLocaleString()}</p>
          <p><strong>Deaths:</strong> {country?.deaths.toLocaleString()}</p>
          <p><strong>Recovered:</strong> {country?.recovered.toLocaleString()}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalDetail;
