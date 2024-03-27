import { useState } from "react";
import { Link } from "react-router-dom";
import { RiHomeFill, RiDatabase2Fill } from "react-icons/ri";
import { FaQuestionCircle, FaPlusSquare } from "react-icons/fa";
import "./NavMenu.css";

function NavMenu() {
    const [navMessage, setNavMessage] = useState("nav: loading...");

    const handleHover = (message) => {
        setNavMessage(message);
    };

    const handleOffHover = () => {
        setNavMessage("nav: loading...");
    };

    return (
        <div className="nav-container-outer">
            <div className="nav-container-inner">

                <Link to='/'
                    onMouseEnter={() => handleHover("nav: home")}
                    onMouseLeave={() => handleHover(handleOffHover)}>
                    <button className='nav-btn'><RiHomeFill /></button>
                </Link>

                <Link to='/places/all-places'
                    onMouseEnter={() => handleHover("nav: full database")}
                    onMouseLeave={() => handleHover(handleOffHover)}>
                    <button className='nav-btn'><RiDatabase2Fill /></button>
                </Link>

                <Link to='/places/random-place'
                    onMouseEnter={() => handleHover("nav: random destination")}
                    onMouseLeave={() => handleHover(handleOffHover)}>
                    <button className='nav-btn'><FaQuestionCircle /></button>
                </Link>

                <Link to='/places/add-place'
                    onMouseEnter={() => handleHover("nav: new destination")}
                    onMouseLeave={() => handleHover(handleOffHover)}>
                    <button className='nav-btn'><FaPlusSquare /></button>
                </Link>

                <div className="nav-msg-display">
                    <p>{navMessage}</p>
                </div>

            </div>
        </div>
    );
}

export default NavMenu;
