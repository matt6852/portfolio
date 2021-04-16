import React from "react";
import { FaBehance, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import cocktailFull from "./assets/cocktailFull.png";
import cocktailSmall from "./assets/cocktailSmall.png";
import dogsFull from "./assets/dogsFull.png";
import dogsSmall from "./assets/dogsSmall.png";
import watcherFull from "./assets/watcherFull.png";
import watcherSmall from "./assets/watcherSmall.png";
import hakerSmall from "./assets/hakerSmall.png";
import hakerfull from "./assets/hakerFull.png";


export const links = [

  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contacts",
    text: "contact",
  },
 
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://github.com/matt6852",
    icon: <FaGithub />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];


export const projects = [
  {
    id: 1,
    title: "cocktail maker",
    descriotion: "react",
    technologi: ["react", "router", "fetching data", "context api"],
    imgBig: cocktailFull,
    imgSmall: cocktailSmall,
    webLink: "https://cocktailmaker.netlify.app/",
    codeLink: "https://github.com/matt6852/react-app-router",
  },
  {
    id: 2,
    title: "Dogsgination",
    descriotion: "react",
    technologi: ["react", "hooks", "fetching data", "pagination"],
    imgBig: dogsFull,
    imgSmall: dogsSmall,
    webLink: "https://unruffled-euler-4690fc.netlify.app/",
    codeLink: "https://github.com/matt6852/pagination",
  },
  {
    id: 3,
    title: "to do",
    descriotion: "react",
    technologi: ["react", "hooks", "fetching data", "pagination"],
    imgBig: watcherFull,
    imgSmall: watcherSmall,
    webLink: "https://react-todo-watcher.netlify.app/",
    codeLink: "https://github.com/matt6852/to-do",
  },
  {
    id: 4,
    title: "Haker news",
    descriotion: "react",
    technologi: ["reducer", "hooks", "fetching data", "pagination"],
    imgBig: hakerfull,
    imgSmall: hakerSmall,
    webLink: "https://hungry-kirch-0000e6.netlify.app/",
    codeLink: "https://github.com/matt6852/haker_news",
  },
]; 