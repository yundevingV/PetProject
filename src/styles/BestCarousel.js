import styled ,{css} from "styled-components";
import Slider from 'react-slick'

export const StyledSlider = styled(Slider)`
    width: 70%;
    height: 200px;
    border-radius: 10px;

    background-color: #12fd12;

    .slick-dots {
        display: flex;
        width: 100px;
        margin: 0;
        padding: 0;
        left: 50%;
        bottom: 10px;
        transform: translate(-50%, -50%);

    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }

  }
`

export const Img = styled.img`

width: 200px;
height: auto;
`

export const Div = styled.div`
width: 30px;
height: 30px;
position: absolute;
right: 16px;
z-index: 99;
text-align: right;
line-height: 30px;
`;

export const DivPre = styled.div`
width: 30px;
height: 30px;
position: absolute;
left: 16px;
z-index: 99;
text-align: left;
line-height: 30px;
`;