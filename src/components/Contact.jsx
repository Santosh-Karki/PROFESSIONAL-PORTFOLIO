import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";




const Contact = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      className="w-screen md:min-h-[400px] h-[250px] bg-neutral-100 text-black items-center justify-center "
   
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center text-slate-600 sm:text-left sm:text-4xl font-semibold">
            Get in Touch
          </h1>
          <div className="flex flex-row items-center justify-center ">
          <div className="border-2 border-neutral-700 w-full items-center justify-center flex flex-row gap-20 p-6 rounded-3xl text-xl">
          <a className="flex flex-row gap-2 text-slate-800 justify-center items-center hover:text-slate-400 duration-200 hover:scale-105 cursor-pointer"
       href="mailto:karki_santosh@outlook.com"
        target="_blank"
        data-aos="flip-up" 
        data-aos-delay="200"
        data-aos-once="true">
          <MdEmail className="text-rose-700"/> Email
            </a>



        <a className="flex flex-row gap-2 text-slate-800 justify-center items-center hover:text-slate-400 duration-200 hover:scale-105 cursor-pointer"
        href="https://www.linkedin.com/feed/"
        target="_blank"
        data-aos="flip-down" 
        data-aos-delay="400"
        data-aos-once="true">
        <FaLinkedin className="text-blue-500"/>   LinkedIn
        </a>

          </div>
          </div>
          
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
