import { useEffect, useState } from "react";
import { supabase } from "./data/superbase";

import { CategoryFilter, FactList, NewFactForm, Header } from "./components";

import "./style.css";
import { Loading } from "./components/Loading";

export const TodayILearned = () => {

  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFacts = async () => {
      setIsLoading(true);
      let { data: facts, error } = await supabase
        .from('facts').select('*').order('votesInteresting', { ascending: false }).limit(1000)

        if(!error) setFacts(facts);
        else alert('There was a problem getting data');
        setIsLoading(false);
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
        {
          isLoading ? <Loading /> : <FactList facts={ facts }/>
        }
        
      </main>
    </>
  );
};
