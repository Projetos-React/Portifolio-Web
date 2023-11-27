import { useState } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import { menuItems } from "../ultils/ultis";

interface Props{
  toggleTheme():void;
}

export default function Menu({toggleTheme} : Props) {
  const [light, SetLight] = useState(true);
  const handleTheme = () => {
    SetLight(!light);
    toggleTheme();
  };
  return (
    <nav className="nav">
      <Link to="/" style={{ cursor: "pointer" }}>
        <img src="./images/logoDark.svg" alt="Logo" />
      </Link>
      <div className="NavBar">
        <ul>
          {menuItems.map((item) => {
            return (
              <li>
                <Link
                  to={item.id}
                  activeClass="nav-selected"
                  className="nav-itens"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="socialItens">
        <div className="socialIcons">
          <a
            href="https://github.com/Albert1616"
            target="blank"
            className="iconSocial"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-ara%C3%BAjotec/"
            target="blank"
            className="iconSocial"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="iconTheme">
          {light ? (
            <FaMoon onClick={handleTheme} />
          ) : (
            <FaSun onClick={handleTheme} />
          )}
        </div>
      </div>
    </nav>
  );
}
