import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecordTable from "./components/RecordTable";
import { useRecords } from "./hooks/useRecords";
import { useSearch } from "./hooks/useSearch";
import { usePagination } from "./hooks/usePagination";
import FileUploader from "./components/FileUploader";
import PaginationControls from "./components/PaginationControls";

const AppContent = () => {
    const { records, updateRecords } = useRecords();
  const { query, setQuery, filteredData } = useSearch(records);
  const {
    currentPage,
    pageSize,
    paginate,
    totalPages,
    goToNext,
    goToPrev,
    changePageSize,
  } = usePagination();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("records") || "[]");
    updateRecords(stored);
  }, []);


  const paginatedData = paginate(filteredData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8 drop-shadow-md">
          Client Records Management Application
        </h1>
        <FileUploader />
        <SearchBar query={query} onSearch={setQuery} />
        <RecordTable data={paginatedData} />
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages(filteredData.length)}
          pageSize={pageSize}
          onNext={() => goToNext(filteredData.length)}
          onPrev={goToPrev}
          onPageSizeChange={changePageSize}
        />
      </div>
    </div>
  );}

export default AppContent;
