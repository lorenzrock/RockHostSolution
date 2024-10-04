import React, { useState, useContext, createContext, useEffect, useRef} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import Nav from './Nav/Nav';
import Home from './Home/Home';
export const Context = React.createContext(null);



function App() {
  const [navIsOpen, setNavOpenState] = useState(false);
  const body = useRef(null);

  useEffect(() => {
    setBodyWidth();
  }, [navIsOpen])





  function setBodyWidth() {
    if (navIsOpen && body.current) {
      body.current.style.paddingRight = "220px"
    } else {
      body.current.style.paddingRight = "0"
    }
  }






















  return (
      <Context.Provider value={[navIsOpen, setNavOpenState]}>
        <BrowserRouter>
          <div className="body" ref={body} >
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
  )
}

export default App
