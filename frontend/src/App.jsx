import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import AccountManagement from './AccountManagement/AccountManagement'
import Dashboard from './Dashboard/Dashboard';


export const UserContext = createContext({});

function App() {
  const [user , setUser] = useState({
    id: null,
    name: ""
  })
  
  


  return (
    <>
      <UserContext.Provider value={{user, setUser}}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={
                <AccountManagement />
            }></Route>
            <Route path="/dashboard" element={
              <Dashboard />
            }></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
