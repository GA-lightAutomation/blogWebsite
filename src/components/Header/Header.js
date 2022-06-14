import React from "react";
import './Header.css';  
import { Button } from "../Buttons/Button";

function Header() {
    return (
       <div className="header">

           <div className="header-intro">
                <h1>LIGHT AUTOMATION PROJECT</h1>
                <h3>Gearbox Academy Cohort 5</h3>
           </div> 

           <div className="header-button">
                <Button>Go to the project</Button>
           </div>

       </div> 
    )
}

export default Header; 