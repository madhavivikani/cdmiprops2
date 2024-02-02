import React from 'react';
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from './image/company1.png';
import img2 from './image/company2.png';
import img3 from './image/company3.png';
import img4 from './image/company4.png';
import img5 from './image/company5.png';
import img6 from './image/company6.jpg';

const c_slider = [img1, img2, img3, img4, img5, img6];


function Std() {
    return (

        <div>

            <div className='std'>
                <div className='offer_part'>
                    <div className='two_p'>
                        <div className='line'></div>
                        <div className='text_cdmi'>STUDENT PLACEMENT</div>
                    </div>
                    <p className='course'>OUR RECRUITMENT PARTNERS</p>
                </div>
                <div className='company'>
                    <OwlCarousel className='owl-theme' loop margin={10} autoplay autoplayTimeout={3000} items={6} dots={false}>
                        {
                            c_slider.map((ele, index) => {
                                return (
                                    <div class='item item1' key={index}>
                                        <img src={ele}></img>
                                    </div>
                                )
                            })
                        }

                    </OwlCarousel>

                </div>

            </div>
        </div>
    );
}
export default Std;