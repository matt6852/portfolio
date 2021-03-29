import React, { useState, useRef, useEffect } from "react";
import { FaBars} from "react-icons/fa";
import { Link } from "react-router-dom";
import { links, social } from "../data";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const { height } = linksRef.current.getBoundingClientRect();
    if (showNav) {
      linksContainerRef.current.style.height = `${height}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showNav]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3>
            <Link to="/">Sergey Maychin</Link>
          </h3>
          <button className="nav-toggle" onClick={() => setShowNav(!showNav)}>
            <FaBars />
          </button>
        </div>
        <div className={`links-container`} ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to ={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                {" "}
                <a href={url}>{icon} </a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
