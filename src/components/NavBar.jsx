import React from "react";
import { Link } from "react-router-dom";

function NavBar(){

    return(
        <nav className='nav-container'>
            <Link to="/">🏠Home Page</Link>
        </nav>
    )
}

export default NavBar;
