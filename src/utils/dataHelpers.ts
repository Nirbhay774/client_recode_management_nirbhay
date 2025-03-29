import { RecordType } from "../types/record";

export function removeDuplicateEmails(data: RecordType[]): RecordType[] {
  const unique = new Map();
  for (const item of data) {
    if (!unique.has(item.email)) {
      unique.set(item.email, item);
    }
  }
  return Array.from(unique.values());
}

export function mergeRecords(
  existing: RecordType[],
  incoming: RecordType[]
): RecordType[] {
  return removeDuplicateEmails([...existing, ...incoming]);
}


export function sortRecordsById(data: RecordType[]): RecordType[] {
    return data.sort((a, b) => {
      const idA = isNaN(Number(a.id)) ? a.id : Number(a.id);
      const idB = isNaN(Number(b.id)) ? b.id : Number(b.id);
      return idA > idB ? 1 : -1;
    });
  }