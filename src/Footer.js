import logo from "./image/creative-logo-white.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";

var cdmi_p = "Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.";

const f_icon = [<FaFacebookF></FaFacebookF>, <FaTwitter></FaTwitter>, <TiSocialGooglePlus></TiSocialGooglePlus>, <FaLinkedin></FaLinkedin>, <TiSocialInstagram></TiSocialInstagram>, <CiYoutube></CiYoutube>, <FaWhatsapp></FaWhatsapp>];

const sec1 = [
    { icon: <FaHandPointRight></FaHandPointRight>, name: "About Us" },
]

const sec2 = [
    { icon: <FaHandPointRight></FaHandPointRight>, name: "Blogs" }
]

const sec3 = [
    { icon: <FaHandPointRight></FaHandPointRight>, name: "Join Us" }
]
const sec4 = [
    { icon: <FaHandPointRight></FaHandPointRight>, name: "Company Login" }
]
const sec5 = [
    { icon: <FaHandPointRight></FaHandPointRight>, name: "Certificate Verification" }
]

const sec6 = [
    {icon:<RiHomeOfficeLine></RiHomeOfficeLine>,name:"Katargam"}
]
const sec7 = [
    {icon:<RiHomeOfficeLine></RiHomeOfficeLine>,name:"Mota Varachha"}
]
const sec8 = [
    {icon:<RiHomeOfficeLine></RiHomeOfficeLine>,name:"Adajan"}
]
const sec9 = [
    {icon:<RiHomeOfficeLine></RiHomeOfficeLine>,name:"Navsari"}
]




function Footer() {
    return (

        <div>

            <div className='bg_blue'>

                <div className='three_part'>
                    <div className='first_p'>
                        <div className='first_inner'>
                            <div className='cretive_logo'>
                                <img src={logo}></img>
                            </div>
                            <p className='cdmi_p'>
                                {cdmi_p}
                            </p>
                            <a href='#'><p className='follow'>FOLLOW US ON</p></a>
                            <p className='icon1'>
                                {
                                    f_icon.map((ele, index) => {
                                        return (
                                            <p className='one_i'><i>{ele}</i></p>
                                        )
                                    })
                                }
                            </p>
                        </div>
                    </div>
                    <div className='sec_p'>
                        <div className='inner_c'>
                            <p className='feature'>FEATURE LINKS</p>
                            <div className='i_one'>
                                {
                                    sec1.map((ele, index) => {
                                        return (
                                            <span>{ele.icon} {ele.name}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className='i_one'>
                                {
                                    sec2.map((ele, index) => {
                                        return (
                                            <span>{ele.icon} {ele.name}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className='i_one'>
                                {
                                    sec3.map((ele, index) => {
                                        return (
                                            <span>{ele.icon} {ele.name}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className='i_one'>
                                {
                                    sec4.map((ele, index) => {
                                        return (
                                            <span>{ele.icon} {ele.name}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className='i_one'>
                                {
                                    sec5.map((ele, index) => {
                                        return (
                                            <span>{ele.icon} {ele.name}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='third_p'>
                        <div className='inner_con'>
                            <p className='contact'>CONTACT US</p>
                            <p className='head'>HEAD OFFICE - YOGICHOWK</p>
                            <p className='p_404'>
                                401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat</p>
                            <p className='mo'>Mo :<font color="#FFBC06"> +91 90333 16003</font></p>
                            <p className='other'>OTHER BRANCHES</p>
                            <div className='i_one'>
                                {
                                    sec6.map((ele,index)=>{
                                        return(
                                            <span>{ele.icon} {ele.name}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className='i_one'>
                            {
                                    sec7.map((ele,index)=>{
                                        return(
                                            <span>{ele.icon} {ele.name}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className='i_one'>
                            {
                                    sec8.map((ele,index)=>{
                                        return(
                                            <span>{ele.icon} {ele.name}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className='i_one'>
                            {
                                    sec9.map((ele,index)=>{
                                        return(
                                            <span>{ele.icon} {ele.name}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}
export default Footer;