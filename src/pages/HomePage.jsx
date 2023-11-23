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

  return (
    <>
    <div className={`galaxy-map ${isZoomed ? "zoom-in" : ""}`}>
      <div className="background-image"
        style={{
          backgroundImage: 'url("src/images/milkyway.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          transition: "transform 2s"
        }}
      ></div>
        <span className="hp-random-btn">
          <Button variant="warning">
            <a href="/places/random-place">Random Destination</a>
          </Button>{" "}
        </span>
        <span className="hp-random-btn2">
          <Button variant="warning">
            <a href="/places/add-place">Log Destination</a>
          </Button>{" "}
        </span>
        <span className="hp-random-btn3">
          <Button variant="warning">
            <a href="/places/all-places">Load Database</a>
          </Button>{" "}
        </span>

        <span className="hp-random-btnEarth">
          <Button
            variant="warning"
            onClick={() =>
              handlePreviewUrl(
                "https://project-exo-app.netlify.app/places/details/1"
              )
            }
          >
            Earth
          </Button>{" "}
        </span>

        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Earth Details</Modal.Title>
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
    </>
  );
}

export default HomePage;
