import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter,Routes,Route,NavLink,Nav} from "react-router-dom"
export default function App1()

{
   return(
   <BrowserRouter> 
   <nav style={{backgroundColor: "#ba7c75", display: "flex" ,justifyContent : "center"}}>
    <ul style={{ display: "flex" , gap :"40px",listStyle:"none" }}>
  <li><NavLink to="/Home" style={{color:"black",fontWeight:"bold"}}>Home</NavLink></li><br></br>
 <li> <NavLink to="/About" style={{color:"black",fontWeight:"bold"}}>About us</NavLink></li><br></br>
  <li><NavLink to="/Contact" style={{color:"black",fontWeight:"bold"}}>Contact me</NavLink></li>
  </ul>
  </nav>

   <Routes>
     <Route path="/Home" element={<Home />}/>
     <Route path="/About" element={<About />}/>
     <Route path="/Contact" element={<Contact />}/>


   </Routes>
   </BrowserRouter>
   )
}