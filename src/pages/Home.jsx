import React, { useState } from "react";
import JournalCard from "./JournalCard";
import EditJournalModal from "./EditJournalModal";

const Home = ({ journals, setJournals, persistData }) => {
  const [editJournalData, setEditJournalData] = useState(null);

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
    </div>
  );
};

export default Home;
