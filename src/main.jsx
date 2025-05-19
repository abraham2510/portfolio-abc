import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SomeOtherProjects from './components/SomeOtherProjects'

const Body = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <SomeOtherProjects />
      <Contact />
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body />
  </StrictMode>,
)
