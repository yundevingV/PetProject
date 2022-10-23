import React from "react";

import { useSelector } from "react-redux";

function SearchResult(){
    const word = useSelector((state) => state.handle.word)

    
    return(
        <div>
            {word}
        </div>
    )
}

export default SearchResult