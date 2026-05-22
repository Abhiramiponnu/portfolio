// Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.link}>Home</a>
      <a href="#about" style={styles.link}>About</a>
      <a href="#education" style={styles.link}>Education</a>
      <a href="#skills" style={styles.link}>Skills</a>
      <a href="#contact" style={styles.link}>Contact</a>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#0000FF",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px"
  }
};

export default Navbar;
