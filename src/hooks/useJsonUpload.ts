import { RecordType } from "../types/record";
import { removeDuplicateEmails } from "../utils/dataHelpers";
import { useRecords } from "./useRecords";

export const useJsonUpload = () => {
  const { records, updateRecords } = useRecords();

  const normalizeRecords = (data: any[]): RecordType[] => {
    return data.map((item) => ({
      id: String(item.id),
      name: String(item.name),
      email: String(item.email),
    }));
  };

  const uploadJson = (newRecords: any[]) => {
    const normalized = normalizeRecords(newRecords);
    const merged = removeDuplicateEmails([...records, ...normalized]);
    updateRecords(merged);
  };

  return { uploadJson };
};
