import { useState } from 'react';
import { CATEGORIES } from '../data';
import { supabase } from '../data/supabase';


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
  const [isUploading, setIsUploading] = useState(false);

  const textLength = text.length;

  const handleSubmit = async(event) => {
    // 1. Prevent browser reload
    event.preventDefault();

    // 2. Check if data is valid. If so, create a new fact
    setIsUploading(true);
    if(text && isValidHttpUrl(source) && category && textLength <= 200){
      // 3. Create a new fact object
      const { data: newFact, error } = await supabase
        .from('facts')
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);
      // 4. Add a new fact to state
      setFacts(facts => [newFact[0], ...facts]);
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
        disabled={ isUploading }
      />
      <select 
        value={ category } 
        onChange={ event => setCategory(event.target.value)}
        disabled={ isUploading }
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
      <button 
        className="btn btn-large"
        disabled={ isUploading }
      >
        Post
      </button>
    </form>
  )
}
