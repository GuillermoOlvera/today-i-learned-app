import { useState } from "react";
import { CategoryFilter, FactList, NewFactForm, Header } from "./components";

import { initialFacts } from "./data";

import "./style.css";

export const TodayILearned = () => {

  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);

  return (
    <>
      <Header setShowForm={ setShowForm } />
      {/* use state variable */}
      { showForm && <NewFactForm setFacts={ setFacts } setShowForm={ setShowForm }/> }
      <main className="main">
        <CategoryFilter />
        <FactList facts={ facts }/>
      </main>
    </>
  );
};
