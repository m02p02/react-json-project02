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
              Cosmic Logger: Bootcamp Wars
              <br />
              <br />
              Two bootcamp students, Alfonso and Yavuz, and a brave alliance of underground freedom
              fighters have risen up to challenge the tyranny and oppression of the awesome Luis & Ale Iron Empire.
              <br />
              <br />
              Loading into a database from a home-office fortress hidden among the billion starry
              bytes of the digital galaxy, these Rebel students have won their first pivotal victory 
              in a Codewars battle.
              <br />
              <br />
              The Iron Empire fears that another bootcamp could bring a thousand more
              students into the rebellion.
              <br />
              <br />
              To crush the rebellion once and for all, the Iron Empire is on the way to deploying
              a new and evil test program codenamed JASMIN...
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
