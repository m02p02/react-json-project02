import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Tab, Tabs } from "react-bootstrap";

function LocationDetailsPage(props) {
  const [place, setPlace] = useState({});
  const { placeId } = useParams();

  const navigate = useNavigate();

  const editPlace = () => {
    navigate(`/edit/${placeId}`);
  };

  const getOnePlace = () => {
    axios
      .get(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
      .then((response) => {
        setPlace(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getOnePlace();
  }, []);

  const deletePlace = () => {
    axios
      .delete(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
      .then((response) => {
        navigate("/places/all-places");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <p className="component-header">▶_記入: </p>
        <p className="component-header">
          ▶_済: location [{place.placeName}] has been loaded
        </p>
      </div>

      <div className="place-container" key={place.id}>
        {place && (
          <>
            <Tabs
              defaultActiveKey="place"
              id="uncontrolled-tab-example"
              className="mb-3 custom-tabs"
            >
              <Tab eventKey="place" title="_: place">
                <img
                  className="container-image"
                  src={place.placeImage || "/src/images/stormtroopers1.jpg"}
                  alt={place.placeName}
                  onError={(e) => {
                    e.target.src = "/src/images/stormtroopers1.jpg";
                  }}
                />
                <h5>▶_名: {place.placeName}</h5>
                <p>▶_: {place.location}</p>
                <p>▶_: {place.placeDescription}</p>
              </Tab>
              <Tab eventKey="life" title="_: life">
                <img
                  className="inhabitants-image"
                  src={
                    place.inhabitantsImage || "/src/images/stormtroopers1.jpg"
                  }
                  alt={place.inhabitants}
                  onError={(e) => {
                    e.target.src = "/src/images/stormtroopers1.jpg";
                  }}
                />
                <h5>▶_人類: {place.inhabitants}</h5>
                <p>▶_: {place.inhabitantsDescription}</p>
              </Tab>
            </Tabs>

            <button
              className="submit-btn"
              onClick={() => navigate(`/places/edit/${placeId}`)}
            >
              Update Information
            </button>
            <button
              className="submit-btn"
              onClick={function () {
                deletePlace();
              }}
            >
              Delete from Database
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default LocationDetailsPage;
