import React from 'react'
import { Route, Routes} from "react-router-dom"

import Header from './components/Header.jsx';
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import AddLocationPage from "./pages/AddLocationPage"
import LocationDetailsPage from "./pages/LocationDetailsPage"
import Footer from './components/Footer.jsx';

import './App.css'

function App() {


  return (
    
    <>
      <h1>The mighty locations</h1>

      <Header />      
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/location-details' element={<LocationDetailsPage/>}/>
        <Route path='/add-location' element={<AddLocationPage/>}/>
      </Routes>

      <Footer />

    </>
  )
}

export default App