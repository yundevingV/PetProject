import React from "react";
import DogMenuMain from "./DogMenuMain";

function Test() {

    return(
        <>
            <DogMenuMain category='bag'/>  

        </>
    )
}
DogMenuMain.defaultProps = {
    category : ''
  }
export default Test

