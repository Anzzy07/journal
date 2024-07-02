import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const JournalInput = ({ journals, persistData }) => {
  const [date, setDate] = useState(null);
  const [topic, setTopic] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  const addJournal = () => {
    if (date && topic && desc) {
      const newJournal = {
        id: journals.length === 0 ? 1 : journals[journals.length - 1].id + 1,
        date,
        topic,
        desc,
      };
      persistData([...journals, newJournal]);
      setDate(null);
      setTopic("");
      setDesc("");
      navigate("/");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create a Journal Entry</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <DatePicker
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholderText="Select Today's Date"
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
        <button
          onClick={addJournal}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default JournalInput;
