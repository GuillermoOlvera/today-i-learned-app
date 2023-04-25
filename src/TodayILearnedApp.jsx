import { useState } from "react";
import { CategoryFilter, FactList, NewFactForm, Header } from "./components";

import "./style.css";

export const TodayILearned = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header setShowForm={ setShowForm } />
      {/* use state variable */}
      { showForm && <NewFactForm /> }
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
};
