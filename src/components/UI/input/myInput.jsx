import React from "react";
import "./myInput.css"

const MyInput = React.forwardRef((props,ref) =>{
    return(
        <input ref={ref} className='myInput' {...props}/>
    )
})

export default MyInput;