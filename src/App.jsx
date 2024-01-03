import { useState } from 'react'


import './App.css'
import Navbar from './Navbar.jsx'
import Button from '@mui/material/Button';
import Dashboard from './Dashboard.jsx'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1>TBD Portfolio Website</h1>
      <div className="card">
        <Button variant ="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Navbar>

        </Navbar>
        <Dashboard></Dashboard>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
