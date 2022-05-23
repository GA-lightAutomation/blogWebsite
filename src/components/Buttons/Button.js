import React from "react"; 
import '.../Buttons/Button.css'; 

const STYLES = [
    'btn-outline', 
    'btn-primary'
] 

const SIZES = [
    'btn-medium', 
    'btn-large'
] 

export const Button = ({
    children, 
    type, 
    onClick, 
    btnStyle, 
    buttonSize
}) => {

   const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]; 

   const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; 

   return (
       <button className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick} type={type}>
           {children}
       </button>
   )
} 