import React from 'react'
import {
  FaCss3Alt,
  FaHtml5,
  FaSass,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaGithubAlt,
  FaNpm,
  FaBrain,
  FaSmileWink,
} from "react-icons/fa";

const section = () => {
    return (
        <section id="about">
      <div className="about__title">
        <h2 className="about__title-text">about</h2>
      </div>
      <div className="container__about-center">
        <div className="about__bio flex-items">
          <h3 className="about__bio-title">Hi there !</h3>
          <div className="brain"><FaSmileWink/></div>
          <p className="about__bio-text">
            My name's Sergey I'm a JS React developer. I truly love to
            create something beautiful and fascinating. I do enjoy making
            applications and websites also I'm passionate about new technology.
            Please enjoy my little website, here you can find all the necessary
            information and different websites for you!
          </p>
        </div>
        <div className="about__skils flex-items">
          <h3 className="about__skils-title">Skils :</h3>
          <div className="brain"><FaBrain/></div>

          <div className="about__skils-items">
            <FaHtml5 className ="item"/> 
            <FaCss3Alt className ="item" />
            <FaSass className ="item"/>
            <FaBootstrap className = "item"/>
            <FaJsSquare className ="item"/>
            <FaReact className = "item"/>
            <FaGithubAlt className ="item"/>
            <FaNpm className = "item"/>
        
          </div>
        </div>
      </div>
    </section>
    )
}

export default section
