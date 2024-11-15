
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Footer from './shared/Footer'


function App() {


  return (
    <>
      <Header/>
      <Home/>
      <About />
      <WorkExperience />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
