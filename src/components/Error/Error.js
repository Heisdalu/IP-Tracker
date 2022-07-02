import React from "react";
import ErrorIcon from '../../assets/error.webp'
import './Error.css'


const Error = (props) => {
    return (
        <div className="error">
            <img src={ErrorIcon} alt="" className="error_pic"/>
            Error occured. Refresh again
        </div>
    )
}


export default Error;