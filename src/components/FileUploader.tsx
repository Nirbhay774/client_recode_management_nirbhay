import React, { useState } from "react";
import { useJsonUpload } from "../hooks/useJsonUpload";
import { Loader2 } from "lucide-react"; // optional spinner icon (or use any SVG)

const FileUploader: React.FC = () => {
  const { uploadJson } = useJsonUpload();
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);

    try {
      const text = await file.text();
      const newRecords = JSON.parse(text);

      // Simulate 3 seconds loader
      setTimeout(() => {
        uploadJson(newRecords);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      alert("Invalid JSON file");
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="flex items-center space-x-2 text-blue-600 animate-pulse">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Parsing JSON file...</span>
        </div>
      ) : (
        <label className="cursor-pointer border border-dashed border-gray-400 hover:border-blue-500 p-6 rounded-lg w-full max-w-md text-center transition-colors">
          <span className="text-gray-700 font-medium">
            Click or drag a JSON file to upload
          </span>
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
            disabled={isLoading}
          />
        </label>
      )}
    </div>
  );
};

export default FileUploader;
