import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./HomePage.css";

function HomePage() {
  const [isEarthHovered, setIsEarthHovered] = useState(false);
  const [isDatabaseHovered, setIsDatabaseHovered] = useState(false);
  const [isRandomHovered, setIsRandomHovered] = useState(false);
  const [isLogHovered, setIsLogHovered] = useState(false);

  return (

    <div className="app-monitor">
      <div className="app-bezel">
        <div className="global-panel">
          <div className="homepage-panel">

            <div>
              <p className="component-header">▶_記入: </p>
              <p className="component-header">▶_書込中: location database...</p>
            </div>

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

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
