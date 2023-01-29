import React from "react";
import  "./myButton.css"

const MyButton = ({children,...props}) =>{
    return(
        <button {...props} className='myBtn'>
            {children}
        </button>
    )
}

export default MyButton;