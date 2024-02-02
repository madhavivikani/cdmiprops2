

import banner1 from './image/slider.webp';
import banner2 from './image/slider2.webp';
import banner3 from './image/slider3.webp';
import banner4 from './image/slider4.webp';
import banner5 from './image/slider5.webp';
import banner6 from './image/slider6.webp';
import banner7 from './image/slider7.webp';
import banner8 from './image/slider8.webp';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const slider = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8];


function Slider() {
    return (
        <div>
            <div className='slider'>
                <OwlCarousel className='owl-theme' loop margin={10} autoplay autoplayTimeout={2000  } items={1} dots={false}>
                    {
                        slider.map((ele, index) => {
                            return (
                                <div class='item' key={index}>
                                    <img src={ele}></img>
                                </div>
                            )
                        })
                    }

                </OwlCarousel>


            </div>
        </div>
    );
}
export default Slider;