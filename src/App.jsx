
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Events from './pages/Events/Events';
import Resources from './pages/Resources/resources';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App