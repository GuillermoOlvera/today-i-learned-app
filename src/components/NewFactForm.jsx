import { useState } from 'react';
import { CATEGORIES } from '../data';

export const NewFactForm = () => {

  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');

  const textLength = text.length;

  const handleSubmit = (event) => {
    event.preventDefault();
    
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
      <button class="btn btn-large">Post</button>
    </form>
  )
}
