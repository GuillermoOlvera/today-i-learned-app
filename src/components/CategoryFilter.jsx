import { Category } from "./Category";
import { CATEGORIES } from '../data';

export const CategoryFilter = ({ setCurrentCategory }) => {
  return (
    <aside>
      <ul>
        <li className="category">
          <button 
            className="btn btn-all-categories" 
            onClick={() => setCurrentCategory('all')}
          >
            All
          </button>
        </li>
        {
          CATEGORIES.map( category => (
            <Category 
              key={ category.name } 
              category={ category } 
              setCurrentCategory={ setCurrentCategory }
            />
          ))
        }
      </ul>
    </aside>
  );
};
