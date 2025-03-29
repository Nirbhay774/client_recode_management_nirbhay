import { useState } from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const paginate = (data: any[]) => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
  };

  const totalPages = (dataLength: number) => Math.ceil(dataLength / pageSize);

  const goToNext = (dataLength: number) => {
    if (currentPage < totalPages(dataLength)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const changePageSize = (size: number) => {
    setPageSize(size);
    setCurrentPage(1); // reset to first page
  };

  return {
    currentPage,
    pageSize,
    setCurrentPage,
    paginate,
    totalPages,
    goToNext,
    goToPrev,
    changePageSize,
  };
};
