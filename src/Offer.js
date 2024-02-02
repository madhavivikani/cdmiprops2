import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";




function Offer(props) {
    return (
        <div>
            <div className='one'>
                <div className='one_img'>
                    <img src={props.img}></img>
                </div>
                <p className='dev'>{props.title}</p>
                <p className='br_line'></p>
                <div className='two_start'>
                    <p className='start_icon'>
                         <i>{props.icon}</i>
                        <i>{props.icon}</i>
                        <i>{props.icon}</i>
                        <i>{props.icon}</i>
                        <i>{props.icon1}</i>
                    </p>
                    <p>
                        <a href='#' className='btn'>{props.btn}</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Offer;