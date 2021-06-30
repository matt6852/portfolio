import React,{useState} from "react";
import Card from "./card";


const Projects = ( {data} ) => {
  const[show,setShow] =useState(false)
  // console.log(show);
  
  return (
    <section id="projects" className="py-5">
      <div className="projects__title">
        <h2 className="projects__title-text">Проекты</h2>
      </div>

      {show ? (
        <div className="maincontainer">
          {data.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </div>
      ) : (
        <div className="maincontainer">
          {data.slice(0,3).map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </div>
      )}
      {/* <div className="maincontainer">
        {data.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div> */}

      <div className="center">
        <button className="click-2" onClick={() => setShow(!show)}>
          {" "}
          {show ? "Показать меньше" : "Показать больше"}{" "}
        </button>
      </div>
    </section>
  );
};

export default Projects;
