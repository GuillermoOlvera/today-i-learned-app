import { CATEGORIES } from "../data";
import { Fact } from "./Fact";

export const FactList = ({ facts }) => {

  return (
    <section>
      <ul className="facts-list">
        {
          facts.map((fact) => (
            <Fact fact={ fact } CATEGORIES={ CATEGORIES } key={ fact.id }/>
        ))}
      </ul>
    </section>
  );
};
