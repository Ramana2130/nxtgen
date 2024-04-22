import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Team from './components/Team'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Project/>
        <Team/>
        <Contact/>
        <Footer/>        
      </div>
    </>
  )
}

export default App
