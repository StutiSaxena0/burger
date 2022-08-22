import React from "react";
import burgerLogo from "../../assests/Images/27.1 burger-logo.png.png"
import classes from './Logo.css'
const logo =(props)=>(
    <div className={classes.Logo} >
        <img src={burgerLogo} alt="img"/>
    </div>

)
export default logo