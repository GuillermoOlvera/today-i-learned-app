import { useState } from "react";
import { CategoryFilter, FactList, NewFactForm } from "./components";
import "./style.css";
import { Header } from "./components/Header";

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
