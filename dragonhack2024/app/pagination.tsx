import React from "react";

const Pagination: React.FC<{
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void; // Function to handle page change
  }> = ({ currentPage, totalPages, onPageChange }) => {
  // Function to handle previous page button click
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1); // Update current page state
    }
  };

  // Function to handle next page button click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1); // Update current page state
    }
  };

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {/* Previous page button */}
        <li>
          <button
            onClick={handlePreviousPage} // Call handlePreviousPage function
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {/* Next page button */}
        <li>
          <button
            onClick={handleNextPage} // Call handleNextPage function
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
