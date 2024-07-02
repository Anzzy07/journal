import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditJournalModal = ({ journal, onClose, onUpdate }) => {
  const [date, setDate] = useState(new Date(journal.date));
  const [topic, setTopic] = useState(journal.topic);
  const [desc, setDesc] = useState(journal.desc);

  const handleSubmit = () => {
    onUpdate({ ...journal, date, topic, desc });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg z-50">
        <h2 className="text-2xl font-bold mb-4">Edit Journal</h2>
        <div className="mb-4">
          <DatePicker
            className="w-full p-2 border border-gray-300 rounded-lg"
            selected={date}
            onChange={(date) => setDate(date)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditJournalModal;
