import React, {useState, useEffect} from "react";
import { Link } from "react-scroll";


const Nav = [
  {
    id: 1,
    name: "ABOUT",
    link: "about",
  },
 
  {
    id: 2,
    name: "PROJECTS",
    link: "project",
  },
  {
    id: 3,
    name: "CONTACT",
    link: "contact",
  },
  
 
];



const Navbar = ({ }) => {
  const [pageViews, setPageViews] = useState(2);



  const handleClick=()=>{
    setPageViews(2);
    localStorage.clear();
    }

  useEffect(() => {
    const storedPageViews = localStorage.getItem('pageViews');


    if (storedPageViews) {
      setPageViews(parseInt(storedPageViews, 10));
    }

    setPageViews((prevPageViews) => {
      const newPageViews = prevPageViews + 1;
      localStorage.setItem('pageViews', newPageViews.toString());
      return newPageViews;
    });
  }, []);

  return (
   
   
  
    
      <div className="flex w-screen text-[15px] shadow-lg border-1 bg-gray-500 h-12 text-slate-100 font-semibold border-black flex-row justify-between items-center px-14 fixed z-50 ">

      <div>
      <Link className=" cursor-pointer  inline-block px-4 hover:text-gray-400 duration-200" to="/" spy={true} smooth={true} offset={-100} duration={200} >

        <p> S.KARKI</p>
        </Link>

      </div>


        <div>
        <ul className="sm:flex hidden items-center gap-4">
          {Nav.map((data) => (
            <li key={data.id}>
                   <Link className=" cursor-pointer inline-block px-4 hover:text-gray-400 duration-200" to={data.link} spy={true} smooth={true} offset={-100} duration={200} >
  
                {data.name}
              </Link>
            </li>
          ))}
   

         
        </ul>
        </div>

        <div className="flex flex-row gap-2 ">
      
        <button className="cursor-auto" onClick={handleClick}>People Visited Today: </button>
        <p> {pageViews}</p>

      </div>
      </div>

  );
};

export default Navbar;
