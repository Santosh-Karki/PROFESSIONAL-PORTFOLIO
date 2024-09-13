
import Book1 from "../assets/projects/afogato.png";
import Book2 from "../assets/projects/book.png";
import Book3 from "../assets/projects/essential.png";


 
const Home = () => {
  return (
    <>
      <div
        className="w-screen  min-h-[600px] bg-gray-200 flex flex-col p-16 justify-center items-center duration-200"
    
      >
   <h1 data-aos="fade-down"  data-aos-once="true" className="text-4xl text-slate-700 font-bold mb-16 "> PROJECTS</h1>

        
<div className ="flex flex-col md:gap-16  gap-6 w-full">
  <div className = "grid grid-cols-1 md:grid-cols-2 items-center ">
    <div className="  h-full  md:p-24 text-justify md:pt-12">
    <h1 className="font-bold text-xl  ">ESSENTIALS
      </h1>
      <p> Developed a full-stack clothing e-commerce platform that allows users to browse collections, 
        filter products, add items to their shopping cart, and complete purchases securely.</p>

      <div>
        <strong> Tech Stack: </strong> <p className="italic"> React, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS</p>
        
      </div>
    </div>
    <div className=" flex flex-col gap-2 justify-center items-center p-6 h-full">
    <img data-aos="flip-right" data-aos-delay="300"  data-aos-once="true" src={Book3}
    className="w-[400px] h-[200px] sm:h-[250px] rounded-3xl sm:scale-125 object-contain"/>

<div className="flex flex-row gap-4">
  <a href="https://zesty-puffpuff-093811.netlify.app/" target="_blank" className="hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 duration-200">
<button data-aos="zoom-out-right" data-aos-delay="200"  data-aos-once="true" className="w-24 p-2 rounded-full text-md font-bold bg-white text-slate-700 border-2 border-slate-400"> Demo</button>
</a>
<a href="https://github.com/Santosh-Karki/Essentials-E-commerce-website" target="_blank" className="hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 duration-200">
<button data-aos="zoom-in-left" data-aos-delay="300"   data-aos-once="true" className="w-24 p-2 rounded-full text-md font-bold bg-white text-slate-700 border-2 border-slate-400"> Github</button>
</a>
</div>
    </div>

     </div>




     <div className = "grid grid-cols-1 md:grid-cols-2 items-center ">

     <div className=" flex flex-col gap-2 justify-center items-center p-6 h-full md:row-end-1 row-start-2">
    <img data-aos="flip-right" data-aos-delay="300"  data-aos-once="true" src={Book1}
    className="w-[400px] h-[200px] sm:h-[250px] rounded-3xl sm:scale-125 object-contain"/>

<div className="flex flex-row gap-4">
  <a href="https://affogato.netlify.app/" target="_blank" className="hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 duration-200">
<button data-aos="zoom-out-right" data-aos-delay="200"  data-aos-once="true" className="w-24 p-2 rounded-full text-md font-bold bg-white text-slate-700 border-2 border-slate-400"> Demo</button>
</a>
<a href="https://github.com/Santosh-Karki/Restaurant"target="_blank" className="hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 duration-200">
<button data-aos="zoom-in-left" data-aos-delay="300"   data-aos-once="true" className="w-24 p-2 rounded-full text-md font-bold bg-white text-slate-700 border-2 border-slate-400"> Github</button>
</a>
</div>
    </div>


    <div className="  h-full md:p-24 text-justify md:pt-12  md:row-end-2 row-start-1">
    <h1 className="font-bold text-xl  ">AFFOGATO
      </h1>
      <p>  Designed and developed a full-stack restaurant app that allows customers to make reservations, browse the menu, place orders,
          and track delivery status, with a focus on enhancing the dining experience both in-house and for takeout.</p>

      <div>
        <strong> Tech Stack: </strong> <p className="italic"> React, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS</p>
        
      </div>
    </div>
   

     </div>





     <div className = "grid grid-cols-1 md:grid-cols-2 items-center ">
    <div className=" h-full md:p-24 text-justify md:pt-12">
    <h1 className="font-bold text-xl  ">BOOKPEDIA
      </h1>
      <p>  Developed a full-stack web application for an online bookstore that allows users to browse books, read reviews, make purchases, 
        and manage their personal libraries.</p>

      <div>
        <strong> Tech Stack: </strong> <p className="italic"> React, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS</p>
        
      </div>
    </div>
    <div className=" flex flex-col gap-2 justify-center items-center p-6 h-full">
    <img data-aos="flip-right" data-aos-delay="300"  data-aos-once="true" src={Book2}
    className="w-[400px] h-[200px] sm:h-[250px] rounded-3xl sm:scale-125 object-contain"/>

<div className="flex flex-row gap-4">
  <a href="https://tranquil-alfajores-baba3a.netlify.app/" target="_blank" className="hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 duration-200">
<button data-aos="zoom-out-right" data-aos-delay="200"  data-aos-once="true" className="w-24 p-2 rounded-full text-md font-bold bg-white text-slate-700 border-2 border-slate-400"> Demo</button>
</a>
<a href="https://github.com/Santosh-Karki/BookPedia" target="_blank" className="hover:scale-110 focus:outline-none focus:ring focus:ring-slate-400 duration-200">
<button data-aos="zoom-in-left" data-aos-delay="300"   data-aos-once="true" className="w-24 p-2 rounded-full text-md font-bold bg-white text-slate-700 border-2 border-slate-400"> Github</button>
</a>
</div>
    </div>

     </div>











</div>

        
       
      </div>
    </>
  );
};

export default Home;
