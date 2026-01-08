import "./navbar.css"
import { useState } from "react";
import { Link } from "react-router-dom"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };
 
   return (
     <nav className="navbar">
       <div className="nav-container">
         <Link to="/" className="nav-logo">
           WilTech
         </Link>
         <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
           <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
             Home
           </Link>
           <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
             About
           </Link>
           <Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
             Projects
           </Link>
           <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
             Contact
           </Link>
         </div>
         <div className="nav-toggle" onClick={toggleMenu}>
           <span className="bar"></span>
           <span className="bar"></span>
           <span className="bar"></span>
         </div>
       </div>
     </nav>
   );
}
