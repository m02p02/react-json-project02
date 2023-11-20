import React from "react";
import { Link } from "react-router-dom";

function NavBar(){

    return(

        <>
            <h3>NavBar</h3>
            <nav className='nav-container'>
                <Link to="/"> **🏠Home Page** </Link>
                <Link to="/places/all-places"> **🏠All Places** </Link>
                <Link to="/places/random-place"> **Random Place** </Link>
            </nav>
            <hr />
        </>
    )
}

export default NavBar;
