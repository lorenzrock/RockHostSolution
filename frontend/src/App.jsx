import { useState } from 'react'
import './App.css'
import AccountManagement from './AccountManagement/AccountManagement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccountManagement />
    </>
  )
}

export default App
