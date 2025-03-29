import React, { useState } from "react";
import { RecordType } from "../types/record";

interface Props {
  data: RecordType[];
  onDelete: (id: string) => void;
  onEdit: (record: RecordType) => void;
}

const RecordTable: React.FC<Props> = ({ data, onDelete, onEdit }) => {
  const [editId, setEditId] = useState<string | null>(null);
  const [editedRecord, setEditedRecord] = useState<RecordType | null>(null);

  const handleEdit = (record: RecordType) => {
    setEditId(record.id);
    setEditedRecord(record);
  };

  const saveEdit = () => {
    if (editedRecord) {
      const allRecords = JSON.parse(localStorage.getItem("records") || "[]");
      const emailExists = allRecords.some(
        (r: RecordType) => r.email === editedRecord.email && r.id !== editedRecord.id
      );
      if (emailExists) {
        alert("Email must be unique");
        return;
      }
      onEdit(editedRecord);
      setEditId(null);
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="min-w-full text-sm text-left text-black">
        <thead className="bg-gray-100 uppercase text-xs text-black">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((record,index) => (
            <tr  key={`${record.id}-${index}`}className="hover:bg-gray-50 transition text-black">
              <td className="px-6 py-4">
                {editId === record.id ? (
                  <input
                    className="border px-2 py-1 rounded w-full text-black"
                    value={editedRecord?.id || ""}
                    onChange={(e) => setEditedRecord({ ...editedRecord!, id: e.target.value })}
                  />
                ) : (
                  record.id
                )}
              </td>
              <td className="px-6 py-4">
                {editId === record.id ? (
                  <input
                    className="border px-2 py-1 rounded w-full text-black"
                    value={editedRecord?.name || ""}
                    onChange={(e) => setEditedRecord({ ...editedRecord!, name: e.target.value })}
                  />
                ) : (
                  record.name
                )}
              </td>
              <td className="px-6 py-4">
                {editId === record.id ? (
                  <input
                    className="border px-2 py-1 rounded w-full text-black"
                    value={editedRecord?.email || ""}
                    onChange={(e) =>
                      setEditedRecord({ ...editedRecord!, email: e.target.value })
                    }
                  />
                ) : (
                  record.email
                )}
              </td>
              <td className="px-6 py-4 space-x-2">
                {editId === record.id ? (
                  <>
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      onClick={saveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      onClick={() => handleEdit(record)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => onDelete(record.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;
