import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Profile from './component/Profile.jsx'
import InfoCards from './component/Infocards.jsx'
import Projects from './component/Project.jsx'
import Skill from './component/Skill.jsx'
import Contact from './component/Contact.jsx' 

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <>
      <div className={`${darkMode ? "bg-[#1dfb83]" : "bg-[#7c3aed]"} min-h-screen flex items-center justify-center px-6 py-12`}>
      {/* DARK CONTENT DIV */}
      <div className={`${darkMode ? "bg-[#0f172a]" : "bg-gray-100"} w-full min-h-[88vh] rounded-3xl px-10 py-8`}>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Profile />
        <InfoCards />
        <Projects />
        <Skill />
        <Contact />

      </div>
    </div>
    </>
  )
}

export default App
