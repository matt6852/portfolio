import React from "react";
import { FaFacebookF, FaInstagramSquare, FaVk } from "react-icons/fa";

const contacts = () => {
    const time = new Date().getFullYear().toLocaleString().replace(/\s/g, "");
    
  return (
    <div id="contacts">
      <div className="projects__title">
        <h2 className="projects__title-text">contact me</h2>
      </div>
      <div className="contacts__center">
        <h3>email:</h3>
        <div className="footer_flex">
          <p>prorkwow@mail.ru</p>
          <div>
            <h3>telegram:</h3>
            <p>@Sergey_Ball</p>
          </div>
          <div>
            <h3>Social:</h3>
            <div className="socila-flex">
              <a href="https://www.facebook.com/profile.php?id=100023386068140">
                {" "}
                <FaFacebookF className="item" />
              </a>{" "}
              <a href="https://instagram.com/matt_newborn?igshid=1vynmm5j159yl">
                <FaInstagramSquare className="item" />
              </a>{" "}
              <a href="https://vk.com/mattchin">
                <FaVk className="item" />
              </a>{" "}
            </div>
          </div>
          <p>
            made by Sergey Maychin &copy;
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default contacts;
