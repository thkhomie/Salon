import './App.css'
import About from './component/About'
import Gallery from './component/Gallery'
import Home from './component/Home'
import NavBar from './component/NavBar'
import Services from './component/Services'
import Products from './component/Products'
import Footer from './component/Footer'
import Testimonal from './component/Testimonal'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Testimonal />
      <Products />
      <Footer />
    </>
  )
}

export default App
