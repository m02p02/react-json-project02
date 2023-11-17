import React from "react";
import { Link } from "react-router-dom";

function HomePage() {

    return (

        <div>
    
            <h1>This is the HomePage</h1>
            <h1>--NavBar DOES NOT display on this page</h1>
            <h3>--Background - galaxy themed</h3>
            <h3>--Instead of NavBar, links (buttons) are displayed as locations in the galaxy</h3>
            <h3>--HomePage link 1: to all locations page</h3>
            <h3>--HomePage link 2: to random location page</h3>
            <h3>--HomePage link 3: to add location page</h3>

        </div>
    
    )
}

export default HomePage;