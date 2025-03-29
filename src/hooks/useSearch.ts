import { useState } from "react";
import { RecordType } from "../types/record";

export const useSearch = (data: RecordType[]) => {
  const [query, setQuery] = useState("");

  const filteredData = data.filter((r) => {
    const id = String(r.id).toLowerCase();
    const name = String(r.name).toLowerCase();
    const email = String(r.email).toLowerCase();
    return (
      id.includes(query.toLowerCase()) ||
      name.includes(query.toLowerCase()) ||
      email.includes(query.toLowerCase())
    );
  });

  return { query, setQuery, filteredData };
};
