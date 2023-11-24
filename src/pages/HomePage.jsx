import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../HomePage.css";
import IntroModal from "../components/IntroModal";

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(false);
  const [urlToPreview, setUrlToPreview] = useState("");
  const [isZoomed, setIsZoomed] = useState(true);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handlePreviewUrl = (url) => {
    setUrlToPreview(url);
    handleShowModal();
  };

  useEffect(() => {
    const introModalShown = localStorage.getItem("introModalShown");
    if (!introModalShown) {
      setShowIntroModal(true);
      localStorage.setItem("introModalShown", "true");
    }

    const timeout = setTimeout(() => {
      setIsZoomed(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleIntroModalClose = () => {
    setShowIntroModal(false);
  };

  const [isEarthHovered, setIsEarthHovered] = useState(false);
  const [isDatabaseHovered, setIsDatabaseHovered] = useState(false);
  const [isRandomHovered, setIsRandomHovered] = useState(false);
  const [isLogHovered, setIsLogHovered] = useState(false);

  return (

    <div className='galaxy-container'>

      <div className={`galaxy-map ${isZoomed ? "zoom-in" : ""}`}>
        <div
          className="background-image"
          style={{
            backgroundImage: 'url("src/images/milkyway.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            transition: "transform 2s",
          }}
        ></div>
        <span className="hp-random-btn">
          <Button
            onMouseEnter={() => setIsRandomHovered(true)}
            onMouseLeave={() => setIsRandomHovered(false)}
          >
            <a href="/places/random-place">▶_: random destination</a>
          </Button>{" "}
        </span>

        <span className="hp-log-btn">
          <Button
            onMouseEnter={() => setIsLogHovered(true)}
            onMouseLeave={() => setIsLogHovered(false)}
          >
            <a href="/places/add-place">▶_: log destination</a>
          </Button>{" "}
        </span>

        <span className="hp-database-btn">
          <Button
            onMouseEnter={() => setIsDatabaseHovered(true)}
            onMouseLeave={() => setIsDatabaseHovered(false)}
          >
            <a href="/places/all-places">▶_: load database</a>
          </Button>{" "}
        </span>

        <span className="hp-earth-btn">
          <Button
            onMouseEnter={() => setIsEarthHovered(true)}
            onMouseLeave={() => setIsEarthHovered(false)}
            onClick={() =>
              handlePreviewUrl(
                "https://project-exo-app.netlify.app/places/details/1"
              )
            }
          >
            ▶_: load [Earth]
          </Button>{" "}
        </span>

        <div className={`hp-random-icon-1 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
        <div className={`hp-random-icon-2 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
        <div className={`hp-random-icon-3 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
        <div className={`hp-random-icon-4 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
        <div className={`hp-random-icon-5 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
        <div className={`hp-log-icon ${isLogHovered ? 'log-hovered' : ''}`}></div>
        <div className={`hp-database-icon ${isDatabaseHovered ? 'database-hovered' : ''}`}></div>
        <div className={`hp-earth-icon ${isEarthHovered ? 'earth-hovered' : ''}`}></div>

        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>location: Earth</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {urlToPreview && (
              <iframe
                title="URL Preview"
                src={urlToPreview}
                style={{
                  width: "100%",
                  height: "500px",
                  border: "none",
                }}
              ></iframe>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <IntroModal show={showIntroModal} onHide={handleIntroModalClose} />
      </div>
    </div>
  );
}

export default HomePage;
