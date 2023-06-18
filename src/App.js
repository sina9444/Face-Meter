import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import SignOut from './components/SignOut/SignOut';
import "./App.css";
import particlesOptions from "./particles.json";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImportFromLink from "./components/ImportFromLink/ImportFromLink";



function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles className="particles" options={particlesOptions} init={particlesInit} />
      <SignOut />
      <Logo />
      <Rank />
      <ImportFromLink />
    </div>
  );
}

export default App;
