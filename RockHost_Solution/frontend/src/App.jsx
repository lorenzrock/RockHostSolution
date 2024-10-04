import React, { useState, useContext, createContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import Nav from './Nav/Nav';
import Home from './Home/Home';
export const Context = React.createContext(null);



function App() {
  
  return (
    <>
      <Context.Provider value={[Context]}>
        <BrowserRouter>
          <div className="body">
            <ThemeSwitch />
            <Nav />
            <Routes>
              <Route path="/" element={
                <Home />
              }>
              <Route path="/home" element={
                <Home />
              }></Route>

              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}

export default App
