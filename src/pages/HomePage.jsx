import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function HomePage() {

    return (
        <>
        <div>
    
            {/* <h1>Galaxy Map with links</h1> */}
            <nav className="galaxyMap">
                <span>
                <Button variant="outline-secondary"><Link to="/places/random-place">The random place</Link></Button>{"  "}
                </span>
                <span>
                <Button variant="outline-secondary"><Link to="/places/add-place">Add your new discovery</Link></Button>{"  "}
                </span>
                <span>
                <Button variant="outline-secondary"><Link to='/places/all-places'>Check what`s discovered</Link></Button>{"  "}
                </span>
            </nav>

        </div>
        </>
    )
}

export default HomePage;