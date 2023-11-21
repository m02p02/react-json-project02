import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function HomePage() {


    return (
        <>
            <div>

                {/* <h1>Galaxy Map with links</h1> */}
                <div className="galaxy-map">
                    <span className='hp-random-btn'>
                        <Button variant="outline-secondary"><Link to="/places/random-place">Random Destination</Link></Button>{"  "}
                    </span>
                    <span className='hp-random-btn2'>
                        <Button variant="outline-secondary"><Link to="/places/add-place">Log Destination</Link></Button>{"  "}
                    </span>
                    <span className='hp-random-btn3'>
                        <Button variant="outline-secondary"><Link to='/places/all-places'>Load Database</Link></Button>{"  "}
                    </span>
                    <span className='hp-random-btnEarth'>
                        <Button variant="outline-secondary"><Link to='/places/details/1'>Earth</Link></Button>{"  "}
                    </span>
                </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Earth Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Link to='/places/details/1'></Link>
            <p>This is the content of the Earth modal.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
    </Modal>
      </div>
    </>
  );
}

export default HomePage;
