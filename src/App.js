import logo from './logo.svg';
import './App.css';
import { GoMail } from "react-icons/go";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
// import logo from "./image/creative-logo-white.svg";
import logonav from "./image/creative-logo-blue.svg";
import { FaQuoteRight } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import Offer from './Offer';
import Count from './Count';
import Choose from './Choose';
import Header from './Header';
import Main_header from './Main_header';
import Slider from './Slider';
import Std from './Std';
import Demand from './Demand';
import Footer from './Footer';



const choose_1 = [
  {
    id: 1,
    img: require('./image/one.webp'),
    title: "Development Courses",
    icon: <IoIosStar></IoIosStar>,
    icon1: <IoStarHalfOutline></IoStarHalfOutline>,
    btn: "Know More..!"
  },
  {
    id: 2,
    img: require('./image/two.webp'),
    title: "Design Courses",
    icon: <IoIosStar></IoIosStar>,
    icon1: <IoStarHalfOutline></IoStarHalfOutline>,
    btn: "Know More..!"
  },
  {
    id: 3,
    img: require('./image/three.webp'),
    title: "Programming IT",
    icon: <IoIosStar></IoIosStar>,
    icon1: <IoStarHalfOutline></IoStarHalfOutline>,
    btn: "Know More..!"
  }

]

const choose_2 = [
  {
    id: 1,
    img: require('./image/img4.webp'),
    title: "Trendy Courses",
    icon: <IoIosStar></IoIosStar>,
    icon1: <IoStarHalfOutline></IoStarHalfOutline>,
    btn: "Know More..!"
  },
  {
    id: 2,
    img: require('./image/img5.webp'),
    title: "Civil-Mech. Engineering",
    icon: <IoIosStar></IoIosStar>,
    icon1: <IoStarHalfOutline></IoStarHalfOutline>,
    btn: "Know More..!"
  },
  {
    id: 3,
    img: require('./image/img6.jpg'),
    title: "Business Development",
    icon: <IoIosStar></IoIosStar>,
    icon1: <IoStarHalfOutline></IoStarHalfOutline>,
    btn: "Know More..!"
  }

]

const count = [
  {
    id: 1,
    img: require('./image/b1.png'),
    number: "18000+",
    std: "HAPPY STUDENT"
  },
  {
    id: 2,
    img: require('./image/b2.png'),
    number: "10+",
    std: "CERTIFICATION APPROVAL"
  },
  {
    id: 3,
    img: require('./image/b3.png'),
    number: "100+",
    std: "CERTIFIED TEACHERS"
  },
  {
    id: 4,
    img: require('./image/b4.png'),
    number: "12000+",
    std: "STUDENTS PLACED"
  },
]

const choose1 = [
  {
    id: 1,
    img: require('./image/1.png'),
    industry: "Industry Experts As Trainers",
    our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  {
    id: 2,
    img: require('./image/3.png'),
    industry: "Latest Curriculum",
    our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  {
    id: 3,
    img: require('./image/4.png'),
    industry: "Latest Technology",
    our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
]

const choose2 = [
  {
    id: 1,
    img: require('./image/5.png'),
    industry: "Interview Assistance",
    our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  {
    id: 2,
    img: require('./image/6.png'),
    industry: "Free Upgradation",
    our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  {
    id: 3,
    img: require('./image/7.png'),
    industry: "Lifetime Support",
    our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
]

const info = [
  {
    "name": "info@cdmi.in",
    "icon": <GoMail></GoMail>,
    "name1": "Verify Certificate",
    "icon1": <FaCertificate></FaCertificate>,
    "have": "HAVE ANY QUESTION ? +91 90333 16003",
    "facebook": <FaFacebookF></FaFacebookF>,
    "twitter": <FaTwitter></FaTwitter>,
    "google": <TiSocialGooglePlus></TiSocialGooglePlus>,
    "linkedin": <FaLinkedin></FaLinkedin>,
    "instagram": <TiSocialInstagram></TiSocialInstagram>,
    "youtube": <CiYoutube></CiYoutube>,
    "wtsp": <FaWhatsapp></FaWhatsapp>,
    // "img":require(`./image/about-us.jpg`)
  }
]

const offer_title = [
  {
    "text_cdmi": "CREATIVE COURSE",
    "course": "OFFERED COURSES"
  }
]



function App() {
  return (

    <div>

      {
        info.map((ele, index) => {
          return (

            <Header key={index} name={ele.name} name1={ele.name1} icon={ele.icon} icon1={ele.icon1}
              have={ele.have} facebook={ele.facebook} twitter={ele.twitter} google={ele.google} linkedin={ele.linkedin}
              instagram={ele.instagram} youtube={ele.youtube} wtsp={ele.wtsp}
            />
          )
        })
      }

      <Main_header />
      <Slider />

      <div className='offer_part'>
        <div className='two_p'>
          <div className='line'></div>
          <div className='text_cdmi'>CREATIVE COURSE</div>
        </div>
        <p className='course'>OFFERED COURSES</p>
      </div>


      <div className='six_part'>
        <div className='first'>

          {
            choose_1.map((ele, index) => {
              return (
                <Offer key={index} img={ele.img} title={ele.title} icon={ele.icon} icon1={ele.icon1} btn={ele.btn} />
              )
            })
          }
        </div>
        <div className='first'>
          {
            choose_2.map((ele, index) => {
              return (
                <Offer key={index} img={ele.img} title={ele.title} icon={ele.icon} icon1={ele.icon1} btn={ele.btn} />
              )
            })
          }
        </div>
      </div>

      <div className='btn_part'>
        <a className='btn1'>View All Courses</a>
      </div>

      <div className='main_two'>
        <div className='text'>
          <div className='two_p1'>
            <div className='line1'></div>
            <div className='text_cdmi'>ABOUT US</div>
          </div>
          <p className='career'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
          <p className='prag'>
            Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
          </p>
          <div className='btn_part1'>
            <a className='btn2'>Enroll Now... !</a>
          </div>
        </div>
        <div className='photo'>
          <div className='img_sir'>
            <img src={require('./image/about-us.jpg')}></img>
          </div>
          <p className='play'>
            <a href='https://youtu.be/ZZpoqf-mwEM?si=mxur6i92DSBGZUoo'><i className='p_icon'><FaPlay></FaPlay></i></a>
          </p>
        </div>
      </div>

      <div className='bg_img'>
        {
          count.map((ele, index) => {
            return (
              <Count key={index} img={ele.img} number={ele.number} std={ele.std} />
            )
          })
        }
      </div>

      <div className='happy'>
        <div className='innder_happy'>
          <div className='testi'>
            <div className='two_p1'>
              <div className='line1'></div>
              <div className='text_cdmi'>HAPPY STUDENTS</div>
            </div>
            <p className='ALUMNI'>ALUMNI SPEAK</p>
            <div className='two_quto'>
              <div className='quote'>
                <i><FaQuoteRight></FaQuoteRight></i>
              </div>
              <div className='icon_l_r'>
                <p className='left_i'><i><MdKeyboardArrowLeft></MdKeyboardArrowLeft></i></p>
                <p className='left_i'><i><MdChevronRight></MdChevronRight></i></p>
              </div>
            </div>
            <p className='visit_p'>
              I visited this coaching center and they treated me with good care and I am loving time here everyone is highly friendly and the learning atmosphere is great.
            </p>
            <div className='two_port'>
              <div className='g_img'>
                <img src={require('./image/pic1.jpeg')}></img>
              </div>
              <div className='name'>
                <p className='vikani'>MADHAVI VIKANI</p>
                <p className='full'>Full-Stack Developer<font color="grey">@Patoliya Infotech</font></p>
              </div>
            </div>
          </div>
          <div className='pic'>
            <img src={require('./image/Capture.PNG')}></img>
          </div>
        </div>
      </div>

      <div className='choose_part'>
        <div className='offer_part'>
          <div className='two_p'>
            <div className='line'></div>
            <div className='text_cdmi'>READ OUR DIFFERENCE</div>
          </div>
          <p className='course'>WHY CHOOSE CREATIVE</p>
        </div>
        <div className='six_part1'>
          <div className='first1'>
            {
              choose1.map((ele, index) => {
                return (
                  <Choose key={index} img={ele.img} industry={ele.industry} our_p={ele.our_p} />
                )
              })
            }
          </div>
          <div className='first1'>
            {
              choose2.map((ele, index) => {
                return (
                  <Choose key={index} img={ele.img} industry={ele.industry} our_p={ele.our_p} />
                )
              })
            }
          </div>
        </div>
      </div>

      <Std />
      <Demand />
      <Footer />
      <div className='copy_part'>
        <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
      </div>



    </div>

  );
}

export default App;
