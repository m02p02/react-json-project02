import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import "./IntroModal.css";

const IntroModal = ({ show, onHide }) => {
  const [animationIteration, setAnimationIteration] = useState(0);
  const audioRef = useRef(new Audio("src/audio/Bootcampwars.m4a"));

  useEffect(() => {
    const audio = audioRef.current;

    if (show) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [show]);

  const handleAnimationIteration = () => {
    if (animationIteration > 0) {
      onHide();
    }
    setAnimationIteration((prev) => prev + 1);
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Body>
        <div
          className="star-wars-intro-container"
          style={{
            backgroundImage: 'url("src/images/spacebackground.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "20px",
            color: "#FFE81F",
            fontFamily: "Star Wars",
            textAlign: "center",
          }}
        >
          <div
            className={`crawl-text ${show ? "slide" : ""}`}
            onAnimationIteration={handleAnimationIteration}
          >
            <p>
              A long time ago in a galaxy far, far away...
              <br />
              <br />
              Locations( Bootcampwars )
              <br />
              <br />
              There were two bootcamp students named Alfonso AND yavuz.
              <br />
              <br />
              A brave alliance of underground freedom fighters has challenged
              the tyranny and oppression of the awesome Luis & Ale EMPIRE.
              <br />
              <br />
              Loading a database from a fortress hidden among the billion stars
              of the galaxy, rebel students have won their first victory in a
              codewars battle.
              <br />
              <br />
              The EMPIRE fears that another bootcamp could bring a thousand more
              students into the rebellion.
              <br />
              <br />
              To crush the rebellion once and for all, the EMPIRE is
              constructing a test program named JASMIN.
              <br />
              <br />
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default IntroModal;
