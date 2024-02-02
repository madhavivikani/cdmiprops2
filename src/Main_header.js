// import { IoStarHalfOutline } from "react-icons/io5";
// import { FaPlay } from "react-icons/fa";
// import logo from "./image/creative-logo-white.svg";
import logonav from "./image/creative-logo-blue.svg";
// import { FaQuoteRight } from "react-icons/fa";
// import { FaHandPointRight } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";


const nav_menu = ['HOME','COURSE','ACTIVITIES','BLOG','KNOW US','GET IN TOUCH','STUDENT ZONE'];


function Main_header() {
  return (

    <div>

      <nav>
        <div className='bg_nav'>
          <div className='left_nav'>
            <div className='img_nav'>
              <img src={logonav}></img>
            </div>
          </div>
          <div className='right_nav'>

          <ul className='main'>
          {
            nav_menu.map((ele,index)=>{
              return(
                <li key={index}><a href="#">{ele}</a></li>
              )
            })
          }

          </ul>

            {/* <ul className='main'>
              <li className='active'><a href='#'>HOME</a></li>
              <li><a href='#'>COURSES<i><FaChevronDown></FaChevronDown></i></a></li>
              <li><a href='#'>ACTIVITIES<i><FaChevronDown></FaChevronDown></i></a>
                <ul className='sub_menu'>
                  <li><a href='#'>Gallery</a></li>
                  <li><a href='#'>Events</a></li>
                </ul>
              </li>
              <li><a href='#'>BLOG</a></li>
              <li><a href='#'>KNOW US<i><FaChevronDown></FaChevronDown></i></a>
                <ul className='sub_menu'>
                  <li><a href='#'>About Us</a></li>
                  <li><a href='#'>Success Stories</a></li>
                  <li><a href='#'>Placement Partner</a></li>
                </ul>
              </li>
              <li><a href='#'>GET IN TOUCH</a></li>
              <li><a href='#'>STUDENT ZONE<i><FaChevronDown></FaChevronDown></i></a>
                <ul className='sub_menu'>
                  <li><a href='#'>Student Login</a></li>
                  <li><a href='#'>Showcase</a></li>
                </ul>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>

    </div>


  );
}
export default Main_header;