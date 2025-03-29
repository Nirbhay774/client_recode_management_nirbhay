import React, { createContext, useState, useContext } from "react";
import { RecordType } from "../types/record";

interface RecordsContextType {
  records: RecordType[];
  setRecords: React.Dispatch<React.SetStateAction<RecordType[]>>;
}

export const RecordsContext = createContext<RecordsContextType | undefined>(undefined);

export const RecordsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [records, setRecords] = useState<RecordType[]>([]);

  return (
    <RecordsContext.Provider value={{ records, setRecords }}>
      {children}
    </RecordsContext.Provider>
  );
};

export const useRecordsContext = (): RecordsContextType => {
  const context = useContext(RecordsContext);
  if (!context) throw new Error("useRecordsContext must be used within a RecordsProvider");
  return context;
};
