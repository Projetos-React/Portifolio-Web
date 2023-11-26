import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

interface Props{
  toggleTheme():void;
}

export default function MenuMobile({toggleTheme}:Props) {

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
  const [showNav, SetshowNav] = useState(false);

  const handleShownav = () => {
    SetshowNav(!showNav);
  };
  return (
    <>
      <nav className="navSection">
        <Link to="/" style={{ cursor: "pointer" }}>
          <img src="./images/logoLight.svg" alt="Logo" />
        </Link>
        {!showNav ? (
          <RxHamburgerMenu onClick={handleShownav} size={30} className="menu-hamb"/>
        ) : (
          <IoMdClose onClick={handleShownav} size={30} className="close-menu" />
        )}
      </nav>
      {showNav && (
        <div className="nav-mobile">
          <div className="lst-mobile">
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
                      onClick={handleShownav}
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
        </div>
      )}
    </>
  );
}
