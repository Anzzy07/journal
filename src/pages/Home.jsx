import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import JournalCard from "./JournalCard";
import EditJournalModal from "./EditJournalModal";
import loadingAnimation from "../assets/loadingAnimation.json";

const Home = ({ journals, setJournals, persistData }) => {
  const [editJournalData, setEditJournalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (journals.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [journals]);

  const deleteJournal = (id) => {
    persistData(journals.filter((journal) => journal.id !== id));
  };

  const editJournal = (journal) => {
    setEditJournalData(journal);
  };

  const handleUpdateJournal = (updatedJournal) => {
    setJournals(
      journals.map((journal) =>
        journal.id === updatedJournal.id ? updatedJournal : journal
      )
    );
    setEditJournalData(null);
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="w-32 h-32 mb-4">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
          <h2 className="text-3xl font-semibold mb-4">Create a Journal</h2>
          <Link
            to="/write"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create Here
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">My Journals</h1>
          <div className="grid grid-cols-1 gap-4">
            {journals.map((journal) => (
              <JournalCard
                key={journal.id}
                journal={journal}
                deleteJournal={deleteJournal}
                editJournal={editJournal}
              />
            ))}
          </div>
          {editJournalData && (
            <EditJournalModal
              journal={editJournalData}
              onClose={() => setEditJournalData(null)}
              onUpdate={handleUpdateJournal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
