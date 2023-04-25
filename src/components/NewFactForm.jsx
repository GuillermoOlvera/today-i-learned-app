import { useState } from 'react';
import { CATEGORIES } from '../data';

const isValidHttpUrl = (string) => {
  let url;
  try {
    url = new URL(string)
  } catch (error) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
}

export const NewFactForm = ({ setFacts, setShowForm }) => {

  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');

  const textLength = text.length;

  const handleSubmit = (event) => {
    // 1. Prevent browser reload
    event.preventDefault();

    // 2. Check if data is valid. If so, create a new fact
    if(text && isValidHttpUrl(source) && category && textLength <= 200){
      // 3. Create a new fact object
      const newFact = {
        id: Math.round(Math.random() * 1000000),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      }
      // 4. Add a new fact to state
      setFacts(facts => [newFact, ...facts]);
      // 5. Reset input fields
      setText('');
      setSource('');
      setCategory('');
      // 6. Close Form
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder="Share a fact with the world..." 
        onChange={ (event) => setText(event.target.value) } 
        value={ text }
      />
      <span>{ 200 - textLength }</span>
      <input 
        type="text" 
        placeholder="Trustworthy spurce..." 
        onChange={event => setSource(event.target.value)}
        value={ source }
      />
      <select 
        value={ category } 
        onChange={ event => setCategory(event.target.value)}
      >
        <option value="">Choose category:</option>
          {
            CATEGORIES.map( category => (
              <option 
                key={ category.name } 
                value={ category.name 
              }>  
                { category.name.toUpperCase() }
              </option>
            ))
          }
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  )
}
