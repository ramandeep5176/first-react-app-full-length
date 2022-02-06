import React from "react";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Sidebar from "./components/sidebar.js";
import "./styles/index.css";
// imports
const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <About />
      <Footer />
    </>
  );
};

export default App;
