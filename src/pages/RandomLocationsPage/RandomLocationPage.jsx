import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import { API_URL, BROKEN_IMG } from "/config";

function RandomLocationPage() {
  const [place, setPlace] = useState({});
  const { placeId } = useParams();

  const getRandomPlace = () => {
    axios
      .get(API_URL)
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
            <p className="global-code-header">▶_: 記入</p>
            <p className="global-code-header">
              ▶_: location [{place.placeName ? place.placeName.toUpperCase() : ""}] loaded...
            </p>
          </div>

          <div className="body-inner-scroll place-container" key={place.id}>
            {place && (
              <>
                <Tabs
                  defaultActiveKey="place"
                  id="uncontrolled-tab-example"
                  className="mb-3 custom-tabs"
                >
                  <Tab eventKey="place" title="▶_: place">
                    <img
                      className="container-image"
                      src={place.placeImage || BROKEN_IMG}
                      alt={place.placeName}
                      onError={(e) => {
                        e.target.src = BROKEN_IMG;
                      }}
                    />
                    <div className="tab-panel">
                      <p className="tab-panel-name">▶_: {place.placeName}</p>
                      <p className="tab-panel-location">▶_: {place.location}</p>
                      <p className="tab-panel-description">▶_: {place.placeDescription}</p>
                    </div>
                  </Tab>
                  <Tab eventKey="life" title="▶_: life">
                    <img
                      className="inhabitants-image"
                      src={place.inhabitantsImage || BROKEN_IMG}
                      alt={place.inhabitants}
                      onError={(e) => {
                        e.target.src = BROKEN_IMG;
                      }}
                    />
                    <div className="tab-panel">
                      <p className="tab-panel-name">▶_: {place.inhabitants}</p>
                      <p className="tab-panel-description">▶_: {place.inhabitantsDescription}</p>
                    </div>
                  </Tab>
                </Tabs>

                <button className="submit-btn" onClick={reloadPage}>
                  ▶_: reload
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
