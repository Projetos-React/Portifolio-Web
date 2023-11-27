import GlobalStyle from "./styles/App.ts";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./data/home/Homescreen/Home";
import NavBar from "./data/home/NavBar";
import { Container } from "./styles/styles.ts";
import {ThemeProvider} from "styled-components";
import themeLight from './styles/light.ts'
import themeDark from './styles/dark.ts'
import {useState } from "react";
import AllProjects from "./data/home/AllProjects.tsx";

function App() {
  const [theme, Settheme] = useState('light');

  const handleTheme = () =>{
    theme === 'light' ? Settheme('dark') : Settheme('light');
  } 
  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
    <div className="App">
      <GlobalStyle />
      <Container>
        <Router>
          <div>
            <NavBar handleTheme={handleTheme}/>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Projects" element={<AllProjects />}></Route>
              <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
          </div>
        </Router>
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
