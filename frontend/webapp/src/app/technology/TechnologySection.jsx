import React, { useEffect, useState } from "react";
import { GetAllTechnologies } from "../../services/technologies";

export default function TechnologySection() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    GetAllTechnologies().then(setTechnologies);
  }, []);

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
}
