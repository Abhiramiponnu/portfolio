import React from "react";
import Navbar from "./componnets/Navbar";
import Home from "./components/Home";                
import Home from "./components/About"; 
import Home from "./components/Education"; 
import Home from "./components/Skills"; 
import Home from "./components/Contact"; 
function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><h1>Home</h1></section>
      <section id="about"><h1>About</h1></section>
      <section id="education"><h1>Education</h1></section>
      <section id="skills"><h1>Skills</h1></section>
      <section id="contact"><h1>Contact</h1></section>
      
    </div>
  );
}

export default App;
