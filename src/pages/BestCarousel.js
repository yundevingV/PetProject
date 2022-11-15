import React from "react";

import DogData from '../json/Dog.json'
import CatData from '../json/Cat.json'

/*slick*/
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { StyledSlider, Img, Div, Next, DivPre, Prev } from "../styles/BestCarousel";
import DogMenuMain from "./DogMenuMain";

export default function BestCarousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000,

        nextArrow: (
            <Div>
              <Next />
            </Div>
          ),
          prevArrow: (
            <DivPre>
              <Prev />
            </DivPre>
          ),
    }
    const Data = {...DogData, ...CatData }

    console.log(Data)
    return(
        <>
            <StyledSlider {...settings}>
                <div>
                    <Img src={Data.dog[0].src} alt='x' />
                </div>
                <div>
                    2
                </div>
                <div>
                    3
                </div>
            </StyledSlider>
        </>
    )
}



