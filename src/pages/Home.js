import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkLogin = styled(Link)`
color : red;
`

function Home(){
    return(
        <div>
            Home
            <LinkLogin to='/Login'>Log in</LinkLogin>

        </div>
    )
}

export default Home