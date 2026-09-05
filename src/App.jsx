import './App.css'
import Hero from './components/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProductViewer></ProductViewer>
    </main>
  )
}

export default App
