import {  Route, Routes, BrowserRouter } from 'react-router-dom'; // <-- Corrected import
import Navbar from './components/navbar/Navbar';
// import Hero from './components/hero/Hero';
import { Footer } from './components/footer/Footer';
import Aboutme from "./components/aboutme/Aboutme"
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';
import './App.css'
import Home from './pages/Homepage';

function App() {
   return (
    <>
    <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App