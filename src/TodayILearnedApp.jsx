import { useEffect, useState } from "react";
import { supabase } from "./data/supabase";
import { CategoryFilter, FactList, NewFactForm, Header, Loading } from "./components";

import "./style.css";

export const TodayILearned = () => {

  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    const getFacts = async () => {
      setIsLoading(true);

      let query = supabase.from('facts').select('*')

      if(currentCategory !== 'all')
        query = query.eq('category', currentCategory);

      const { data: facts, error } = await query
        .order('votesInteresting', { ascending: false })
        .limit(1000)

        if(!error) setFacts(facts);
        else alert('There was a problem getting data');
        setIsLoading(false);
    }
    getFacts();
  },[currentCategory]);

  return (
    <>
      <Header setShowForm={ setShowForm } />
      {/* use state variable */}
      { 
        showForm 
          && <NewFactForm 
              setFacts={ setFacts } 
              setShowForm={ setShowForm }/> 
      }
      <main className="main">
      <CategoryFilter setCurrentCategory={ setCurrentCategory }/>
        {
          isLoading 
            ? <Loading /> 
            : <FactList 
                facts={ facts }
                setFacts={ setFacts }
              />
        }
      </main>
    </>
  );
};
