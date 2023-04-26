import { CATEGORIES } from "../data";
import { Fact } from "./Fact";

export const FactList = ({ facts, setFacts }) => {

  if(facts.length === 0) {
    return (
      <p className="message">
        No facts for this category yet! Create the first one ✌🏻
      </p>
    )
  }
  
  return (
    <section>
      <ul className="facts-list">
        {
          facts.map((fact) => (
            <Fact 
              fact={ fact } 
              CATEGORIES={ CATEGORIES } 
              key={ fact.id } 
              setFacts={ setFacts }
            />
        ))}
      </ul>
    </section>
  );
};
