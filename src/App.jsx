import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Admission from "./components/Admission"
import Contact from "./components/Contact"
import Facilities from "./components/Facilities"
import Gallery from "./components/Gallery"
import GalleryImg from "./components/GalleryImg"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Program from "./components/Program"
import Teacher from "./components/Teacher"
import Wcu from "./components/Wcu"
import Footer from "./components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Wcu />
      <Program />
      <Facilities />
      <Teacher />
      <Gallery />
      <Admission />
      <Contact />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery-images" element={<GalleryImg />} />
      </Routes>
    </Router>
  )
}

export default App