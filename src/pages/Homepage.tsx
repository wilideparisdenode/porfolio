import Aboutme from "../components/aboutme/Aboutme";
import { Contact } from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import { Projects } from "../components/projects/Projects";
import "./home.css"
// Home Component
function  Home(){
  return (
   <div className="app">
   {/* <motion.ul animate={{ rotate: 360 }} /> */}
   <Hero/>
   <Aboutme/>
   <Projects/>
   <Contact/>
  
   </div>
 
  
  );
};
export default  Home;

