import React from "react";
import About from "./about.js";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Sidebar from "./sidebar.js";
// const url = "https://course-api.com/react-tours-project";
const App = () => {
  return (
    <>
      <div>
        <h1>rtodayaman</h1>
      </div>
      <About />
      <Navbar />
      <Footer />
      <Sidebar />
    </>
  );
};

export default App;
