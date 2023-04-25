import { useState } from "react";
import { CategoryFilter, FactList, NewFactForm } from "./components";
import "./style.css";

export const TodayILearned = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            alt="Today I Learned Logo"
            height="68"
            width="68"
          />
          <h1>Today I Learned!</h1>
        </div>

        <button 
          className="btn btn-large btn-open" 
          // Update state variable
          onClick={() => setShowForm(show => !show) }
        >
          Shared a fact
        </button>
      </header>
      {/* use state variable */}
      { showForm && <NewFactForm /> }
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
};
