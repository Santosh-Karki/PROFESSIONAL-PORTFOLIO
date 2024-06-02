import React from "react";
import Image from "../assets/profile/profile.png";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { Link } from "react-scroll";



const Profile = () => {
  return (
    <div className="min-h-[650px] w-screen h-screen sm:w-full flex justify-center items-center ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          

      
          <div 
          data-aos="zoom-in-right"
          data-aos-once="true"
          className="flex flex-col text-gray-700 text-center items-center  ">
            
            <h1 className="text-3xl font-bold">
            <p className="text-xl text-neutral-500 font-semibold">
            Ciao, I'm
            </p>
            Santosh Karki
            <p className="text-5xl text-neutral-500 font-semibold">Full Stack developer</p>
            </h1>
            <div className="flex flex-row  gap-6 mt-6">
            <a href="Santosh.Karki CV.pdf" download="Santosh.Karki CV.pdf" >
              <button className="w-36 p-2 rounded-full text-md font-bold bg-slate-600 text-white hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 ease-in duration-200"> Download CV</button>
              </a>
              <Link className=" cursor-pointer inline-block px-4 hover:text-primary duration-200" to="contact" spy={true} smooth={true} offset={-100} duration={200} >

              <button className="w-36 p-2 rounded-full outline-offset-0 border-2 border-slate-600 text-md font-bold  text-slate-600 hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 ease-in duration-200"> Contact</button>
              </Link>
              </div>
          
              <div className="flex flex-row text-2xl gap-6 mt-6">
              <a href="https://www.linkedin.com/feed/" target="_blank" className="hover:scale-110 duration-200"><SiLinkedin /></a>
              <a  href="https://github.com/Santosh-Karki" target="_blank" className="hover:scale-110 duration-200"><SiGithub /></a>
             <a  href="https://codesandbox.io/" target="_blank" className="hover:scale-110 duration-200"> <FiCodesandbox /></a>

              </div>

           
          </div>
        
          <div
          data-aos="zoom-in-left"
          data-aos-once="true">
            <img
              src={Image}
          
              className="max-w-[360px] max-h-[360px] w-full mx-auto bg-gray-300 shadow-2xl rounded-full object-cover"
            />
        </div>
        </div>
        

      </div>

    </div>
  );
};

export default Profile;
