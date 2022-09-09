import React from "react";
import DogMenuMain from './DogMenuMain'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import Dog from '../img/dog-Solid.svg'


function Test() {
    return(
        <>
        <DogMenuMain />
        <img src={Dog}></img>
        <FontAwesomeIcon icon={faDog} />
        <FontAwesomeIcon icon={faHouse} />

        </>
    )
}

export default Test

