import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div id='top' className="bg-gray-900 px-8 text-gray-300">
      <main className="flex flex-col gap-y-48">
        <About />
        <Projects />
        <Skills />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
