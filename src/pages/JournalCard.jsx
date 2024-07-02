import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const JournalCard = ({ journal, deleteJournal, editJournal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative flex flex-col md:flex-row font-sans overflow-hidden">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">{journal.topic}</h2>
        <p className={`text-gray-700 mb-4 ${isExpanded ? "" : "line-clamp-3"}`}>
          {journal.desc}
        </p>
        {journal.desc.length > 100 && (
          <button
            onClick={toggleReadMore}
            className="text-blue-500 hover:text-blue-600"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
      <div className="md:text-right text-gray-500 text-sm absolute top-4 right-4 md:static md:top-auto md:right-auto">
        {new Date(journal.date).toLocaleDateString()}
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 flex md:flex-col items-start md:items-end">
        <button
          onClick={() => editJournal(journal)}
          className="text-blue-500 hover:text-blue-600 mb-2 md:mb-0 md:mr-0 mr-2 p-2"
        >
          <FontAwesomeIcon icon={faEdit} size="lg" />
        </button>
        <button
          onClick={() => deleteJournal(journal.id)}
          className="text-red-500 hover:text-red-600 p-2"
        >
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default JournalCard;
