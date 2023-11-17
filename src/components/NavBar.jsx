import React from "react";
import { Link } from "react-router-dom";

function NavBar(){

    return(

        <>
            <h3>NavBar only has two links:</h3>
            <nav className='nav-container'>
                <Link to="/">🏠Home Page </Link>
                <Link to="/all-locations">🏠All Locations Page </Link>
            </nav>
            <hr />
        </>
    )
}

export default NavBar;
