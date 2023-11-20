import React from "react";
import { Link } from "react-router-dom";

function NavBar(){

    return(

        <>
            <nav className='nav-container'>
                <Link to="/" className='nav-btn'>Home</Link>
                <Link to="/places/all-places" className='nav-btn'>All Places</Link>
                <Link to="/places/random-place" className='nav-btn'>Random Place</Link>
                <Link to='/places/add-place' className='nav-btn'>Add Place</Link>
            </nav>
            <hr />
        </>
    )
}

export default NavBar;
