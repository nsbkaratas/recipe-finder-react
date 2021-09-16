import React from 'react';
import {Link} from "react-router-dom"


const NavBar=()=> {
    
    return (
        <div>
            <nav id="nav-bar">
                <div>
                    <Link to="/">HOME</Link>
                    <Link to="favorites">FAVORITES</Link>
                    <Link to="/account">ACCOUNT</Link>
                </div>                
            </nav>
        </div>
    );    
}

export default NavBar;