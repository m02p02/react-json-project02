import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Tab, Tabs } from "react-bootstrap";

function RandomLocationPage() {
  const [place, setPlace] = useState({});
  const { placeId } = useParams();

  const getRandomPlace = () => {
    axios
      .get("https://exo-app-rest-api.adaptable.app/places/")
      .then((response) => {
        const allPlaces = response.data;
        const randomize = Math.floor(Math.random() * allPlaces.length);
        const getRandom = allPlaces[randomize];
        setPlace(getRandom);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRandomPlace();
  }, []);

  function reloadPage() {
    window.location.reload(false);
  }

  return (
    <div className="app-monitor">
      <div className="app-bezel">
        <div className="global-panel">

          <div>
            <p className="component-header">▶_記入:</p>
            <p className="component-header">
              ▶_済: location [{place.placeName}] has been loaded...
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
                    <div className="tab-content">
                      <h5>▶_名: {place.placeName}</h5>
                      <p>▶_: {place.location}</p>
                      <p>▶_: {place.placeDescription}</p>
                    </div>
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

                <button className="submit-btn" onClick={reloadPage}>
                  Reload
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default RandomLocationPage;
