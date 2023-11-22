import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [urlToPreview, setUrlToPreview] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handlePreviewUrl = (url) => {
    setUrlToPreview(url);
    handleShowModal();
  };

  return (
    <>
        <div className="galaxy-map">
          <span className="hp-random-btn">
            <Button variant="light">
              <a href="/places/random-place">Random Destination</a>
            </Button>{" "}
          </span>
          <span className="hp-random-btn2">
            <Button variant="light">
              <a href="/places/add-place">Log Destination</a>
            </Button>{" "}
          </span>
          <span className="hp-random-btn3">
            <Button variant="light">
              <a href="/places/all-places">Load Database</a>
            </Button>{" "}
          </span>

          <span className="hp-random-btnEarth">
            <Button
              variant="light"
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
                style={{ width: "100%", height: "500px", border: "none" }}
              ></iframe>
            )}
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
