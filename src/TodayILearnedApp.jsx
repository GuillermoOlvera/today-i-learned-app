import { useEffect, useState } from "react";
import { supabase } from "./data/superbase";

import { CategoryFilter, FactList, NewFactForm, Header } from "./components";

import "./style.css";

export const TodayILearned = () => {

  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const getFacts = async () => {
      let { data: facts, error } = await supabase
        .from('facts').select('*')
        setFacts(facts);
    }
    getFacts();
  },[]);

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
