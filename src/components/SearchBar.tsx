import { SearchIcon } from "lucide-react";
import React from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by ID, Name, Email"
      onKeyUp={(e) => onSearch((e.target as HTMLInputElement).value)}
      className="border p-2 w-full mb-4 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
    />
  );
};

export default SearchBar;
