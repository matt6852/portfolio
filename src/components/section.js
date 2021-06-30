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

const Section = () => {
    return (
      <section id="about">
        <div className="about__title">
          <h2 className="about__title-text">Кто я</h2>
        </div>
        <div className="container__about-center">
          <div className="about__bio flex-items">
            <h3 className="about__bio-title">Привет !</h3>
            <div className="brain">
              <FaSmileWink />
            </div>
            <p className="about__bio-text">
              Меня зовут Сергей. Я разработчик JS React. Я действительно люблю
              создать что-то красивое и завораживающее. Мне нравится делать
              приложения и веб-сайты также я увлечен новыми технологиями.
              Пожалуйста, наслаждайтесь моим маленьким сайтом, здесь вы можете
              найти все необходимое информация и разные сайты для вас!
            </p>
          </div>
          <div className="about__skils flex-items">
            <h3 className="about__skils-title">Навыки :</h3>
            <div className="brain">
              <FaBrain />
            </div>

            <div className="about__skils-items">
              <FaHtml5 className="item" />
              <FaCss3Alt className="item" />
              <FaSass className="item" />
              <FaBootstrap className="item" />
              <FaJsSquare className="item" />
              <FaReact className="item" />
              <FaGithubAlt className="item" />
              <FaNpm className="item" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Section
