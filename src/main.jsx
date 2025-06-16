import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SomeOtherProjects from './components/SomeOtherProjects'
import ThemeToggle from './components/ThemeToggle'
// import About from './components/About'

const Body = () => {
  return (
    <>
      <ThemeToggle />
      <HeroSection />
      {/* <About /> */}
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
