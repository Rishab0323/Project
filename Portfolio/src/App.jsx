import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Profile from './component/Profile.jsx'
import InfoCards from './component/Infocards.jsx'
import Projects from './component/Project.jsx'

function App() {
  
  return (
    <>
      <div className="bg-[#1dfb83] min-h-screen flex items-center justify-center px-6 py-12">
      {/* DARK CONTENT DIV */}
      <div className="bg-[#0f172a] w-full min-h-[88vh] rounded-3xl px-10 py-8">

        <Navbar />
        <Profile />
        <InfoCards />
        <Projects />
        

      </div>
    </div>
    </>
  )
}

export default App
