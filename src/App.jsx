import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {


  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,

    });
    
  }, []);

  return (
    <div className=" bg-neutral-100  duration-200">
 <header>
 <Navbar  />
 </header>
    <main>
     <div id="/"> <Profile /></div> 
      <div id="about"><About /></div>
      <div id="project"><Home /></div>
      <div id="contact"><Contact /></div>

      </main>
      <Footer />

     
    </div>
  );
};

export default App;
