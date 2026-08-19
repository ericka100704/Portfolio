import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import EducationSkills from './components/EducationSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BackgroundMesh from './components/BackgroundMesh'
import CursorGlow from './components/CursorGlow'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-dvh overflow-x-clip text-[var(--color-ink)]">
        <BackgroundMesh />
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Experience />
          <EducationSkills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}
