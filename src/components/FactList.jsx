import { CATEGORIES, initialFacts } from "../data";
import { Fact } from "./Fact";

export const FactList = () => {
  return (
    <section>
      <ul className="facts-list">
        {
          initialFacts.map((fact) => (
            <Fact fact={ fact } CATEGORIES={ CATEGORIES } key={ fact.id }/>
        ))}
      </ul>
    </section>
  );
};
