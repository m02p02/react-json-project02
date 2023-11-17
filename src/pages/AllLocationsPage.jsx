import React from "react";
import { Link } from "react-router-dom";

function AllLocationsPage() {

    return (

        <>
            <h2>1. This is the All Locations Page</h2>
            <h3>2. All locations in the database will be listed here</h3>
            <h3>3. This page will have THREE links and TWO functions:</h3>
            <h3>Link 1 = each listing links to the Location Details Page</h3>
            <Link to='/location-details'>Location Details Page</Link>
            <h3>Link 2 = goes to Random Location Page</h3>
            <Link to='/random-location'>Random Location Page</Link>
            <h3>Link 3 = goes to the Add Location Page</h3>
            <Link to='/add-location'>Add Location page</Link>
            <h3>BUTTON Function 1 = EDIT location (/src/components/EditLocation.jsx)</h3>
            <h3>BUTTON Function 2 = DELETE location (/src/components/DeleteLocation.jsx)</h3>
        </>
    )
}

export default AllLocationsPage;