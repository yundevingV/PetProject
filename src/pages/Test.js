import React ,{useState} from "react";

function Test() {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }
    return(
        <>
        <input onChange={onChange} value={text} />
        <div>
            <b>값 : {text} </b>
        </div>
        </>
    )
}

export default Test

