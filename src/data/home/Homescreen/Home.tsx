import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyProjects from "../MyProjects";
import Contato from "../Contato";
import Footer from "../Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyProjects />
            <Contato />
            <Footer />
        </>
    )
}