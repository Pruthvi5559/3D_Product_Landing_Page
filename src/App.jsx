import './App.css'
import Hero from './components/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from './components/Showcase.jsx';
import Performance from './components/Performance.jsx';
import Highlights from './components/Highlights.jsx';
import Footer from './components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App
