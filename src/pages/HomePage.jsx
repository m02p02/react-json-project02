import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function HomePage() {

  return (
    <>
        <div className="galaxy-map">

          <span className='hp-random-btn'>
            <Button className='galaxy-btn'>
              <Link to="/places/random-place"><span>Random Destination</span></Link>
            </Button>{" "}
          </span>

          <span className='hp-random-btn2'>
            <Button className='galaxy-btn'>
              <Link to="/places/add-place"><span>Log Destination</span></Link>
            </Button>{" "}
          </span>

          <span className='hp-random-btn3'>
            <Button className='galaxy-btn'>
              <Link to='/places/all-places'><span>Load Database</span></Link>
            </Button>{" "}
          </span>

          <span className='hp-random-btnEarth'>
            <Button className='galaxy-btn'>
              <Link to='/places/details/1'><span>Earth</span></Link>
            </Button>{" "}
          </span>

        </div>
    </>
  );
}

export default HomePage;
