import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function HomePage() {
    

    return (
        <>
            <div>

                {/* <h1>Galaxy Map with links</h1> */}
                <div className="galaxy-map">
                    <span className='hp-random-btn'>
                        <Button variant="outline-secondary"><Link to="/places/random-place">The random place</Link></Button>{"  "}
                    </span>
                    <span className='hp-random-btn2'>
                        <Button variant="outline-secondary"><Link to="/places/add-place">Add your new discovery</Link></Button>{"  "}
                    </span>
                    <span className='hp-random-btn3'>
                        <Button variant="outline-secondary"><Link to='/places/all-places'>Check what`s discovered</Link></Button>{"  "}
                    </span>
                    <span className='hp-random-btnEarth'>
                        <Button variant="outline-secondary"><Link to='//places/details/1'>The Earth</Link></Button>{"  "}
                    </span>
                </div>

            </div>
        </>
    )
}

export default HomePage;