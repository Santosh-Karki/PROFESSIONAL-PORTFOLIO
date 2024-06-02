import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { SiBitbucket } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";




const About = () =>{


    return(
        <div className="w-screen h-screen min-h-[650px] flex flex-col gap-4 items-center justify-center py-10 sm:mb-10 bg-neutral-50 my-44">
        <div className="flex flex-col items-center gap-4 justify-center">
         {/* {about section} */}
          <div className=" mx-8 p-4 md:w-[1000px] w-[400px] text-justify text-center ">
            
            <h1 data-aos="fade-down"  data-aos-once="true" className="text-3xl font-bold mb-4 text-center text-slate-700">
             ABOUT ME
            </h1>
            <p data-aos="fade-up" data-aos-delay="200"  data-aos-once="true" >
            Results-driven Web Developer with 3+ years of experience in designing, developing, and maintaining web applications. 
            Proficient in both front-end and back-end technologies, with a strong ability to troubleshoot, problem-solve, and optimise code for efficiency.
             Seeking to leverage expertise in full stack development to contribute to innovative projects and drive organisational success.
             </p>
            
          </div>

          {/* {experience container} */}
          <div className='flex flex-col md:flex-row gap-12 justify-center item-center mx-4'>
            <div 
            data-aos="zoom-in-right"
            data-aos-delay="200"
            data-aos-once="true"
            className=' border-2 border-black p-4 text-center rounded-xl w-[300px]'>

                <h1 className='font-bold text-3xl underline mb-4 text-stone-600'> Experiences</h1>
                <p className='text-slate-600'> 3+ Years of Experience </p>
                <p className='text-slate-600'> Full Stack Developer</p>
            </div>

            <div
               data-aos="zoom-in-left"
               data-aos-once="true"
             data-aos-delay="300"
              className=' border-2 border-black p-4 text-center rounded-xl'>

<h1 className='font-bold text-3xl underline mb-4 text-stone-600'> Educaton</h1>
<p className='text-slate-600'> Bachelor's in Information Technology </p>
<p className='text-slate-600'>Federation University</p>

</div>

          </div>
          </div>
          {/* {skills} */}
          <div className='mt-24 text-center flex flex-col gap-4'>
            <h1   data-aos="zoom-up"  data-aos-once="true" className='font-bold text-3xl text-stone-600'>
                Technical Skills
                </h1>
                <div  className='flex flex-wrap sm:flex-row gap-7 text-3xl mb-3'>
                <p  data-aos="zoom-out-right" data-aos-delay="50"  data-aos-once="true" className='text-blue-500'><FaReact /></p> 
                <p  data-aos="zoom-out-right" data-aos-delay="100"  data-aos-once="true" className='text-orange-500'><FaHtml5 /></p> 
                <p data-aos="zoom-out-right" data-aos-delay="150"  data-aos-once="true" className='text-yellow-500'><SiJavascript /></p>
                <p data-aos="zoom-out-right" data-aos-delay="200"  data-aos-once="true" className='text-blue-500'><SiTailwindcss /></p>
                <p data-aos="zoom-out-right" data-aos-delay="300"  data-aos-once="true" className='text-green-500'><FaNode /></p>
                <p data-aos="zoom-out-right" data-aos-delay="400"  data-aos-once="true" className='text-green-500'><SiMongodb /></p>
                <p data-aos="zoom-out-right" data-aos-delay="500"  data-aos-once="true"  className='text-blue-500'><SiMysql /></p>
                <p data-aos="zoom-out-right" data-aos-delay="600"   data-aos-once="true" className='text-purple-900'><SiAdobexd /></p>
                <p data-aos="zoom-out-right" data-aos-delay="700"   data-aos-once="true" className='text-pink-500'><GrGraphQl /></p>
                <p data-aos="zoom-out-right" data-aos-delay="800"   data-aos-once="true" className='text-black'><SiGithub /></p>
                <p data-aos="zoom-out-right" data-aos-delay="850"   data-aos-once="true" className='text-blue-500'><SiBitbucket /></p>
                <p data-aos="zoom-out-right" data-aos-delay="900"   data-aos-once="true" className='text-blue-500'><SiDocker /></p>
                <p data-aos="zoom-out-right" data-aos-delay="1000"   data-aos-once="true" className='text-purple-600'><SiBootstrap /></p>
                </div>

               

          </div>
          </div>
    )
};

export default About;