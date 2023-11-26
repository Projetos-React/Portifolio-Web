import { Link } from "react-scroll";
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const menuItens = [
    ["Skills", "MySkills"],
    ["Sobre mim", "AboutMe"],
    ["Projetos", "MyProjects"],
    ["Contato", "Contact"],
  ];
  return (
    <section className="sectionFooter">
      <footer className="Footer">
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
        </div>
      </footer>
      <div className="copyRight">
        <div className="infoCopyright">
          <p>
            {" "}
            <FaCopyright /> Copyright 2023. Feito por Matheus Albert
          </p>
        </div>
      </div>
    </section>
  );
}
