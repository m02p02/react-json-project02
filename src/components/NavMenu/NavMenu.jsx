import { useState } from "react";
import { Link } from "react-router-dom";
import { RiHomeFill, RiDatabase2Fill } from "react-icons/ri";
import { FaQuestionCircle, FaPlusSquare } from "react-icons/fa";
import "./NavMenu.css";

function NavMenu() {
    const [navMessage, setNavMessage] = useState("▶_: loading...");

    const handleHover = (message) => {
        setNavMessage(message);
    };

    const handleOffHover = () => {
        setNavMessage("▶_: loading...");
    };

    return (
        <div className="nav-container-outer">
            <div className="nav-container-inner">

                <Link to='/'
                    onMouseEnter={() => handleHover("▶_: nav home")}
                    onMouseLeave={() => handleHover(handleOffHover)}>
                    <button className='nav-btn'><RiHomeFill /></button>
                </Link>

                <Link to='/places/all-places'
                    onMouseEnter={() => handleHover("▶_: load full")}
                    onMouseLeave={() => handleHover(handleOffHover)}>
                    <button className='nav-btn'><RiDatabase2Fill /></button>
                </Link>

                <Link to='/places/random-place'
                    onMouseEnter={() => handleHover("▶_: load random")}
                    onMouseLeave={() => handleHover(handleOffHover)}>
                    <button className='nav-btn'><FaQuestionCircle /></button>
                </Link>

                <Link to='/places/add-place'
                    onMouseEnter={() => handleHover("▶_: log new")}
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
