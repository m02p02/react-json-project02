import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import AddLocationPage from "./pages/AddLocationPage"
import LocationDetailsPage from "./pages/LocationDetailsPage"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <h1>The mighty locations</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/location-details' element={<LocationDetailsPage/>}/>
        <Route path='/add-location' element={<AddLocationPage/>}/>
      </Routes>
    </>
  )
}

export default App