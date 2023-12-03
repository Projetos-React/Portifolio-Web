import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyProjects from "../MyProjects";
import Contato from "../Contato";
import Footer from "../Footer";
import NavBar from "../NavBar";

interface HomeProps{
    handleTheme : () => void;
}

export default function Home({handleTheme} : HomeProps) {
    return (
        <>
            <NavBar handleTheme={handleTheme}/>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyProjects />
            <Contato />
            <Footer />
        </>
    )
}