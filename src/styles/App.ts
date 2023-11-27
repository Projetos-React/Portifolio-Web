import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: "Roboto", sans-serif;
  -moz-font-smoothing: "Roboto", sans-serif;
  font-style: normal;
  img{
    user-select: none;
    -webkit-user-drag: none;
  }
}

:root {
  --primary: #5e3bee;
  --heading-color: #282938;
  --bg-shade: #f5fcff;
  --bg-shade-light: #f0ffff;
  --github: #e62972;
  --darkblue: #1c1e53;
  --black: #000000;
  --white: #ffffff;
  --copyright: #f0faff;
}

#HeroSection {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 133px 60px 133px;
  line-height: 20px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.bgShade};
}

#HeroSection p {
  margin-top: 30px;
}

.HeroSaudacao {
  font-weight: 600;
  font-size: 21px;
  color: ${(props) => props.theme.colors.black};
}

.HeroTitle {
  font-weight: 700;
  font-size: 56px;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.headingColor};
  line-height: 60px;
}

.HeroResume {
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.darkblue};
}

.btn_cv {
  font-family: "Roboto";
  padding: 15px 5px;
  color: #ffffff;
  width: 150px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.7s;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
}

.btn_cv:hover {
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
}

.HeroImg img {
  width: 90%;
  height: 450px;
  float: right;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 85px;
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  box-shadow: 0 5.333px 80px 0 rgb(0, 0, 0, 0.1);
  top: 0;
  right: 0;
  left: 0;
}

.NavBar ul {
  list-style: none;
  display: flex;
  gap: 42px;
  text-decoration: none;
  align-items: flex-start;
}

.nav-itens,
.nav-itens-contact {
  text-decoration: none;
  color:${(props) => props.theme.colors.darkblue};
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  transition: 0.2s ease-in-out;
  position: relative;
  cursor: pointer;
}

.nav-itens:hover,
.nav-selected {
  color: ${(props) => props.theme.colors.primary};
}

.nav-itens:hover::after,
.nav-selected::after {
  content: "";
  width: 50%;
  height: 2px;
  background: ${(props) => props.theme.colors.primary};
  position: absolute;
  bottom: -4px;
  left: 1px;
}
.navSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 85px;
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.navSection .menu-hamb, .navSection .close-menu{
  color: ${(props) => props.theme.colors.black};
}
.nav-mobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  padding-bottom: 20px;
  gap: 25px;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: height 0.5s ease-in-out;
}
.nav-mobile .lst-mobile ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  text-decoration: none;
}
.nav-mobile .lst-mobile a {
  font-size: 15px;
}

.skillsContainer {
  padding: 100px 60px;
  background-color: ${(props) => props.theme.colors.white}
}

.skillstitle {
  font-weight: 700;
  font-size: 56px;
  color: ${(props) => props.theme.colors.headingColor};
}

.skillsContainer img {
  width: 80px;
  height: 80px;
}

.skillsType {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 20px;
  gap: 15px;
}

.cardSkill {
  background-color: ${(props) => props.theme.colors.bgShade};
  padding: 40px 70px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 220px;
  max-height: 196px;
  transition: ease-in-out 0.1s;
}
.cardSkill p {
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  margin-top: 25px;
  text-align: center;
}

.cardSkill:hover {
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.bgShadeLight};
}

.sectionAboutme {
  display: flex;
  padding: 80px 60px;
  background-color: ${(props) => props.theme.colors.white};
}

.sectionAboutme img {
  width: 40%;
  height: auto;
}

.infoAboutme .aboutTitle {
  font-weight: 700;
  font-size: 56px;
  color: ${(props) => props.theme.colors.headingColor};
}

.infoAboutme p {
  font-size: 25px;
  font-weight: 500;
  text-align: justify;
  margin-top: 10px;
  line-height: 40px;
  color: ${(props) => props.theme.colors.black};
}

.section {
  padding: 100px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.white};
}

.sectionProjects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.section .projectsTitle {
  font-weight: 700;
  font-size: 56px;
  color: ${(props) => props.theme.colors.headingColor};
}

.CardProject {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  height: 100%;
  border: 2px solid ${(props) => props.theme.colors.white};
  background-color: #fff;
  box-shadow: 0 0 32px 0 rgb(0, 0, 0, 0.15);
  border-radius: 10px;
}

.CardProject .imageProject {
  height: 100%;
}

.CardProject img {
  width: 100%;
  height: 40vh;
  border-radius: 8px;
}

.CardProject .infoProject {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  color:#000000;
}

.CardProject .infoProject button {
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  background-color: transparent;
  padding-bottom: 10px;
  cursor: pointer;
}

.CardProject .infoProject a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
}

.CardProject .infoProject:hover {
  .iconProject {
    color: ${(props) => props.theme.colors.primary};
  }
}

.iconProject {
  font-size: 22px;
  transition: color 0.3s;
}

.sectionMore {
  margin-top: 20px;
}

.sectionMore .moreProjects {
  width: 15%;
  float: right;
  padding: 15px 25px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.github};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;
  a{
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}

.sectionMore .more {
  font-size: 20px;
}

.sectionMore .moreProjects:hover {
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.github};
  a{
    color: ${(props) => props.theme.colors.github};
  }
}

.sectionContact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 60px;
  background-color: ${(props) => props.theme.colors.white};
}

.contactTitle {
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.colors.headingColor};
}
.contactDescription{
  color: ${(props) => props.theme.colors.headingColor};
}

.formContact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50%;
  column-gap: 85px;
  row-gap: 32px;
  margin-top: 25px;
}

.sectionInfo,
.sectionInfo-assunto {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.sectionInfo label,
.sectionInfo-assunto label {
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.darkblue};
}

.sectionInfo input,
.sectionInfo-assunto input,
.sectionInfo-textarea {
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  align-items: center;
  font-size: 20px;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
}
.sectionInfo-assunto,
.sectionInfo-textarea {
  grid-column-end: span 2;
}
#Mensagem {
  border: none;
  outline: none;
  font-size: 20px;
  resize: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
}

.btnContact {
  margin-top: 40px;
  padding: 22px 45px;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 18px;
  transition: ease-in-out 0.4s;
  cursor: pointer;
}

.btnContact:hover {
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
}

.Footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bgShade};
  padding: 100px 85px;
}

.socialItens {
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.socialItens .socialIcons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  .iconSocial {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.black};
    transition: ease-in-out 0.4s;
  }
  .iconSocial:hover {
    transform: scale(1.2);
  }
}

.socialItens .iconTheme {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ease-in-out 0.4s;
  color: ${(props) => props.theme.colors.black};
}

.socialItens .iconTheme:hover {
  transform: scale(1.2);
}

.copyRight {
  padding: 10px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bgShade};
  font-size: 15px;
}

.copyRight .infoCopyright {
  width: 90%;
  border-top: 2px solid ${(props) => props.theme.colors.black};
  text-align: center;
}

.copyRight .infoCopyright p {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  color: ${(props) => props.theme.colors.black};
}

@media screen and (max-width: 1200px) {
  .skillsType {
    grid-template-columns: repeat(4, 1fr);
  }
  .HeroTitle {
    line-height: 50px;
  }
  .formContact {
    width: 80%;
  }
}
@media screen and (max-width: 1000px) {
  .skillsType {
    grid-template-columns: repeat(3, 1fr);
  }
  .sectionMore .moreProjects {
    width: 20%;
  }
  #HeroSection {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
  }
  .CardProject img {
    height: 300px;
  }
  .sectionAboutme img {
    display: none;
  }
  .Footer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 60px 80px;
  }
  .Footer ul {
    flex-direction: column;
  }
  .formContact {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media screen and (max-width: 800px) {
  .sectionProjects {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .sectionMore .moreProjects {
    width: 30%;
    float: left;
  }
  .CardProject {
    width: 90%;
  }
  .Footer {
    flex-wrap: wrap;
  }
  .Footer .socialIcons,
  .Footer .iconTheme {
    margin-top: 30px;
  }
  .copyRight .infoCopyright {
    width: 80%;
  }
  .cardSkill {
    width: 100%;
    max-width: none;
    max-height: none;
  }
  .skillsType {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 700px) {
  .skillsType {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
@media screen and (max-width: 600px) {
  #HeroSection,
  .Footer {
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .navSection {
    padding: 20px 30px;
  }
  .HeroTitle {
    font-size: 40px;
  }
  .sectionMore .moreProjects {
    width: 60%;
  }
  .nav-mobile {
    margin-top: 70px;
  }
}
`;
