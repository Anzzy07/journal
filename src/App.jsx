import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/Login";
import JournalInput from "./pages/JournalInput";

function App() {
  const [journals, setJournals] = useState([]);
  const [newUser, setNewUser] = useState("");

  const handleLogin = (username) => {
    setNewUser(username);
  };

  const persistData = (newList) => {
    localStorage.setItem("journals", JSON.stringify({ journals: newList }));
    setJournals(newList);
  };

  useEffect(() => {
    const localJournalData = localStorage.getItem("journals");
    if (localJournalData) {
      const parsedData = JSON.parse(localJournalData).journals;
      if (Array.isArray(parsedData)) {
        setJournals(parsedData);
      } else {
        console.error("Invalid journals data:", parsedData);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <Router>
        <Navbar username={newUser} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                journals={journals}
                setJournals={setJournals}
                persistData={persistData}
              />
            }
          />
          <Route
            path="/write"
            element={
              <JournalInput
                journals={journals}
                setJournals={setJournals}
                persistData={persistData}
              />
            }
          />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
