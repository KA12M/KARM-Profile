import React  from "react"; 
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/store";

const TechnologySection = function () {
  const {
    technologyStore: { technologies },
  } = useStore();

  return (
    <div className="technology-section">
      <div className="container">
        <h1>My Skills</h1>

        <div className="grid-image">
          {technologies.map((tech, i) => (
            <div key={i} className="item-image">
              <img src={tech.image} alt={tech.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(TechnologySection);
