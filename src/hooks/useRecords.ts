import { useRecordsContext } from "../context/RecordsContext";
import { sortRecordsById } from "../utils/dataHelpers";

export const useRecords = () => {
    const { records, setRecords } = useRecordsContext();
  
    const updateRecords = (newRecords: any[]) => {
      const sorted = sortRecordsById(newRecords);
      setRecords(sorted);
      localStorage.setItem("records", JSON.stringify(sorted));
    };
  
    return { records, updateRecords };
  };