import React from 'react'
import sun from "../assets/sun.png"
import clouds from "../assets/clouds.png"
import {Link} from "react-router-dom"

const header = () => {
    return (
    
        <header id="header">
          <div className="banner-main">
              <img className ="sun" src={sun} alt=""/>
              <img className ="clouds" src={clouds} alt=""/>
            <h1>
              <span className="banner word-1">Front-end</span>
              <span className="banner word-2">
                React{" "}
                <Link className="click" to="/contacts">
                  Hire me!
                </Link>
              </span>
              <span className="banner word-3">JavaScript</span>
            </h1>
          </div>
        </header>
    );
}

export default header
