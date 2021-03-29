import React from "react";
import Card from "./card";


const projects = ( {data} ) => {
  return (
    <section id="projects" className="py-5">
      <div className="projects__title">
        <h2 className="projects__title-text">projects</h2>
      </div>
      <div className="maincontainer">
        {data.map((card)=>{
            return <Card key = {card.id} {...card}/>
        })}
      </div>
    </section>
  );
};

export default projects;
