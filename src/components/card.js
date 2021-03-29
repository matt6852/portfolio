import React from "react";

const card = ({
  title,
  descriotion,
  technologi,
  imgBig,
  imgSmall,
  webLink,
  codeLink,
}) => {
  
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imgBig} className="img_cart" alt={title} />
          <div>
            <h3 className="card-title text-capitalize">{title}</h3>
            <p>{descriotion}</p>
            <p>{[...technologi.join(", ")]}.</p>
          </div>
        </div>
        <div className="flip-card-back">
          <img src={imgSmall} className="img_cart" alt="Avatar" />
          <h3 className="text-capitalize">mobile responsive</h3>

          <div className="buttoncontainer">
            <a
              className="click-2"
              href={webLink}
              target="_blank"
              rel="noreferrer"
            >
              website
            </a>
            <a
              className="click-2"
              href={codeLink}
              target="_blank"
              rel="noreferrer"
            >
              code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
