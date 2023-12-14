"use client";

import Button from "../buttons/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange?.(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange?.(currentPage + 1);
    }
  };

  return (
    <div className="p-4 flex gap-2 items-center justify-end">
      <Button onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </Button>
      <span className="text-text dark:text-text-dark">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        type="secondary"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
