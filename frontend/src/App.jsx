import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from "./page-components/Navigation"
import Home from './pages/Home';
import About from './pages/About';
import Brochures from './pages/Brochures';
import Destination from './pages/Destination';


function App() {

  return (
    <>
      <Router>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/brochures" element={<Brochures />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
