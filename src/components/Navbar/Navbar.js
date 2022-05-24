import { MenuItems } from "./MenuItems"; 
import { Component } from "react"; 
import './Navbar.css';  
// import { Button } from "./Button/Button.js"

class Navbar extends Component {  
    state = {
        clicked: false
    } 
    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    } 

    render () {
        return(
            <nav className="navbar-items">
               <h1 className="navbar-logo">
                  <i class="fa-solid fa-cloud-check"></i>
                   IoT
               </h1> 

               <div className="hamburger-menu" onClick={this.handleClick}> 
                  <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>    
               </div>  

               <ul className={this.state.clicked ? "navbar-items-links items-active" : "navbar-items-links"}> 
                        { MenuItems.map( (item,index) => {
                         return (
                          <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                          </li> 
                         )
                        })}
               </ul>
            </nav>

            // <Button>CHeck us</Button>
        )
    }
} 

export default Navbar;  