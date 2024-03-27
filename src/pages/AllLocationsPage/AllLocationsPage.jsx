import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllLocationsPage() {
  const [place, setPlace] = useState([]);

  const displayAllPlaces = () => {
    axios
      .get("https://exo-app-rest-api.adaptable.app/places")
      .then((response) => {
        setPlace(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    displayAllPlaces();
  }, []);

  return (

    <div className="app-monitor">
      <div className="app-bezel">
        <div className="global-panel">

            <div>
              <p className="component-header">▶_記入:</p>
              <p className="component-header">
                ▶_済: all locations have been loaded...
              </p>
            </div>

            <div className="body-div location-cards-container">
              {place.map((place) => (
                <Card
                  key={place.id}
                  className="location-cards"
                  style={{ width: "15rem" }}
                >
                  <div>
                    <Card.Img
                      variant="top"
                      src={
                        place.placeImage ? place.placeImage : "/src/images/matrix.jpg"
                      }
                    />
                    <Card.Body>
                      <Link to={`/places/details/${place.id}`}>
                        <div className="location-cards-font">
                          <Card.Title className="card-font">
                            ▶_: {place.placeName}
                          </Card.Title>
                        </div>
                      </Link>
                    </Card.Body>
                  </div>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>


  );
}

export default AllLocationsPage;
