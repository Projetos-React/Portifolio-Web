import { useState } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

interface Props{
  toggleTheme():void;
}

export default function Menu({toggleTheme} : Props) {
  const menuItens = [
    ["Home", "HeroSection"],
    ["Skills", "MySkills"],
    ["Sobre mim", "AboutMe"],
    ["Projetos", "MyProjects"],
    ["Contato", "Contact"],
  ];
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
          {menuItens.map((item) => {
            return (
              <li>
                <Link
                  to={item[1]}
                  activeClass="nav-selected"
                  className="nav-itens"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item[0]}
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
