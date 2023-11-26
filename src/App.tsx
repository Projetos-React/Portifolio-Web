import GlobalStyle from "./App.ts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./data/home/Homescreen/Home";
import NavBar from "./data/home/NavBar";
import { Container } from "./styles";
import {ThemeProvider} from "styled-components";
import themeLight from './light.ts'
import themeDark from './dark.ts'
import {useState } from "react";

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
