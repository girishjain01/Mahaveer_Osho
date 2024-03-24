import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects';
import Services from './pages/Services';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <Router>
    <Navigation />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/Services' element={<Services />} />



      </Routes>
    </Router>
    
  );
};

export default App;
