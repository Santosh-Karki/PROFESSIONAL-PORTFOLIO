import React, {useState} from "react";
import Topic1 from '../assets/topic/affogato.png';
import Topic2 from '../assets/topic/bookpedia.png';
import Topic3 from '../assets/topic/essentials.png';
import Book1 from "../assets/projects/afogato.png";
import Book2 from "../assets/projects/book.png";
import Book3 from "../assets/projects/essential.png";
const ImageList = [

  {
    id: 3,
    img: Book3,
    topic: Topic3,
    title: "ESSENTIALS",
    skills: "React, JavaScript, Tailwind CSS",
    description:
    "Responsive Online Clothing Brand ",
    link:"https://zesty-puffpuff-093811.netlify.app/",
    github:"https://github.com/Santosh-Karki/Essentials-E-commerce-website"
    },
  

  {
    id: 1,
    img: Book1,
    topic: Topic1,
    title: "AFFOGATO",
    skills: "React, JavaScript, Node.js, Express.js, MongoDB, Mongoose, REST API, Tailwind CSS",
    description:
      "Responsive Online Cafe Website",
      link: "https://affogato.netlify.app/",
      github:"https://github.com/Santosh-Karki/Restaurant"
  },
  {
    id: 2,
    img: Book2,
    topic: Topic2,
    skills: "React, JavaScript, Tailwind CSS",
    title: "BOOKPEDIA",
    description:
    "Responsive Online BookStore",
    link: "https://tranquil-alfajores-baba3a.netlify.app/",
    github:"https://github.com/Santosh-Karki/BookPedia"
  },
  
  
];

const Home = () => {
  const [imageId, setImageId] = useState(Book3);
  const [title, setTitle] = useState("ESSENTIALS");
  const [link, setLink] = useState("https://zesty-puffpuff-093811.netlify.app/");
  const [github, setGithub] = useState("https://github.com/Santosh-Karki/Essentials-E-commerce-website")

 

  return (
    <>
      <div
        className="w-screen h-screen min-h-[1000px] bg-neutral-100 flex flex-col justify-center items-center duration-200"
    
      >
   <h1 data-aos="fade-down"  data-aos-once="true" className="text-4xl  text-slate-700 font-bold mb-24 "> PROJECTS</h1>

        
        <div className="container pb-2 sm:pb-0">

          <div className="grid grid-cols-1 sm:grid-cols-2 ">

          <div className="min-h-[450px] sm:min-h-[450px]  flex flex-col justify-center items-center relative order-1 sm:order-1 ">

             <div className="flex flex-col justify-center  -translate-y-12">
               {ImageList.map((item) => (
                 <div key={item.id}>
                  <img
                
                data-aos="zoom-out-right" 
                data-aos-delay="200"
                data-aos-once="true"
                   src={item.topic}
                   onClick={() => {
                     setImageId(
                       item.img
                     );
                     setTitle(item.title);
                     setLink(item.link);
                     setGithub(item.github)
                  
                     

                   }}
                  
                   className="max-w-[200px] h-[100px] object-contain cursor-pointer hover:scale-110 duration-200"
                 />
                 <h1 data-aos="zoom-out-right" data-aos-delay="300"  data-aos-once="true" className="-translate-y-8 font-bold"> {item.description} </h1>
                 <p data-aos="zoom-out-right" data-aos-delay="300"   data-aos-once="true" className="text-sm -translate-y-8 "> <strong>Skills:</strong> {item.skills}</p>
                 </div>
               ))}
             
             </div>
           </div>

              {/* {Project card} */}
            <div
              
              className="flex flex-col rounded-lg justify-center p-4  text-center border-2 border-slate-400  sm:text-left order-2 sm:order-2"
            >
  
               <div className=" flex flex-col justify-center items-center">
                <img
                 data-aos="flip-right" data-aos-delay="300"  data-aos-once="true"
                  src={imageId}
                  className="w-[400px] h-[300px] sm:h-[250px] sm:w-[450px] rounded-3xl sm:scale-125 object-contain mx-auto"
                />
              
                <h1 className="font-bold text-slate-800 my-6"> {title}</h1>
<div className="flex flex-row gap-4">
  <a href={link} target="_blank" className="hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 duration-200">
<button data-aos="zoom-out-right" data-aos-delay="200"  data-aos-once="true" className="w-24 p-2 rounded-full text-md font-bold bg-white text-slate-700 border-2 border-slate-400"> Demo</button>
</a>
<a href={github} target="_blank" className="hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 duration-200">
<button data-aos="zoom-in-left" data-aos-delay="300"   data-aos-once="true" className="w-24 p-2 rounded-full text-md font-bold bg-white text-slate-700 border-2 border-slate-400"> Github</button>
</a>
</div>

              </div>


           
            </div>
      
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
