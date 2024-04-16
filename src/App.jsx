import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState);
  }

  return(
    <div className='container'>
      <Navbar darkMode={darkMode} handleClick={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}