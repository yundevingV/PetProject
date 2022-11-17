import React from "react";

import DogData from '../json/Dog.json'
import CatData from '../json/Cat.json'

/*slick*/
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { StyledSlider, SliderContentWrapper, Img } from "../styles/BestCarouselStyles";

import Slider from "react-slick";

export default function BestCarousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000,

    }
    const Data = {...DogData, ...CatData }

    return(
        <>
            <StyledSlider {...settings}>
                <SliderContentWrapper>
                    <Img src={Data.dog[0].src} alt='x' />
                </SliderContentWrapper>
                <SliderContentWrapper>
                    <Img src={Data.cat[1].src} alt='x' />
                </SliderContentWrapper>

            </StyledSlider>
        </>
    )
}



