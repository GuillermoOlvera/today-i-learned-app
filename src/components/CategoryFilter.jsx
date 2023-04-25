import { Category } from "./Category";
import { CATEGORIES } from '../data';

export const CategoryFilter = () => {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">All</button>
        </li>
        {
          CATEGORIES.map( category => (
            <Category key={ category.name } category={ category } CATEGORIES={ CATEGORIES }/>
          ))
        }
      </ul>
    </aside>
  );
};
