import { Routes, Route } from 'react-router-dom'
import BackgroundDecor from './components/BackgroundDecor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function Home() {
  return (
    <main className="relative z-1">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <div className="bg-bg text-ink font-sans overflow-x-hidden min-h-screen">
      <BackgroundDecor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}
