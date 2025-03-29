import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  onNext: () => void;
  onPrev: () => void;
  onPageSizeChange: (size: number) => void;
}

const PaginationControls: React.FC<Props> = ({
  currentPage,
  totalPages,
  pageSize,
  onNext,
  onPrev,
  onPageSizeChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
      {/* Page size dropdown */}
      <div className="flex items-center space-x-2 text-black">
        <label htmlFor="pageSize" className="font-medium">Rows per page:</label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border border-gray-300 bg-white text-black px-3 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {[5, 10, 15, 20].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination buttons */}
      <div className="flex items-center space-x-3 text-black">
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className="px-4 py-1 border border-gray-300 bg-white rounded-md shadow-sm hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-medium">
          Page <span className="text-blue-600">{currentPage}</span> of{" "}
          <span className="text-blue-600">{totalPages}</span>
        </span>

        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="px-4 py-1 border border-gray-300 bg-white rounded-md shadow-sm hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
