import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="./" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <p>Coming soon...</p>
    
    </>
  )
}

export default App
