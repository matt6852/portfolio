
import { FaFacebookF, FaInstagramSquare, FaVk } from "react-icons/fa";

import Time from './time'

const Contacts = () => {
  
  return (
    <div id="contacts">
      <div className="projects__title">
        <h2 className="projects__title-text">Связаться со мной</h2>
      </div>
      <div className="contacts__center">
        <h3>Почта:</h3>
        <div className="footer_flex">
          <p>prorokwow@mail.ru</p>
          <div>
            <h3>Телеграм:</h3>
            <p>@Sergey_Ball</p>
          </div>
          <div>
            <h3>Медия:</h3>
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
          <div>
            <p>

            made by Sergey Maychin &copy; 
            </p>
            <Time/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
