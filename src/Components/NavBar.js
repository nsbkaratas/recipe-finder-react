import React from 'react';
import {Link} from "react-router-dom"
import logo from "../Images/chef.png"


const NavBar=()=> {
    const navStyle={
        color:"white",
        textDecoration: "none",
        fontSize: "16px",
        padding:"15px 5px",
    }
    return (
        <div>
            
            <nav id="nav-bar">
                <div>
                    <a href="">
                    <Link to="/"><img src={logo}/></Link>
                    
                </a>
                <h3><Link to="/" style={navStyle}>Purr-Fect Foods</Link></h3>
                </div>
                

                <h3> Become A Masterchef</h3>
                <div className="nav-links">
                    
                    <div><Link to="/" style={navStyle}>HOME</Link></div>
                    <div><Link to="cakes" style={navStyle}>CAKES</Link></div>
                    <div><Link to="cookies" style={navStyle}>COOKIES</Link></div>
                    <div><Link to="breakfast" style={navStyle}>BREAKFAST</Link></div>
                </div>                
            </nav>
        </div>
    );    
}

export default NavBar;