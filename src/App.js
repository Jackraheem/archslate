import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Project from "./components/Project";
import Hiring from "./components/Hiring";
import People from "./components/People";
import Setting from "./components/Setting";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'  
import './App.css';

function Header(){
  return(
    <>
        <ul>
          <br/>
      <li><Link to="/"><CiHome />Home</Link></li><br/>
      <li><Link to="/Project"><CiStar/>Project</Link></li><br/>
      <li><Link to="/Tasks"><AiOutlineThunderbolt />Tasks</Link></li><br/>
      <li><Link to="/People"><GoPeople />People</Link></li><br/>
      <li><Link to="/Hiring"><PiSuitcaseSimple />Hiring</Link></li><br/>
      <li><Link to="/Setting"><CiSettings />Setting</Link></li><br/>
    </ul>
    </>
  
  )
 }

function App() {
  return (
    <div className="App">
      <div className='head'>
        <img src='https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/yigqqtxntytceseu7baq' alt='archslate' style={{"height":"50px","width":"100px"}}/>
       
     <div className="ss">
     <label> <CiSearch /></label>
       <input  type="search" placeholder="Search" id='sss'/>

       
     </div>
     <i id='noti'><IoMdNotificationsOutline /></i>
    <div className="prof">
      <img src="https://tellygupshup.org/wp-content/uploads/2023/10/Screenshot_20210811-132310_PicsArt.jpg" alt="prof" style={{"border-radius":"50%","width":"40px","height":"50px","marginTop":"15px"}}/>
      <div className="details">
        <h3>Abella Danger</h3>
        <p>Admin</p>
        <i id="do"><FaChevronDown /></i>

      </div>
     
    </div>
      </div>

 <div className="navbar">
 <>
   
   <BrowserRouter>
   <Header/>
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/Project" element={<Project />}/>
   <Route path="/Tasks" element={<Tasks />}/>
   <Route path="/People" element={<People />}/>
   <Route path="/Hiring" element={<Hiring />}/>
   <Route path="/Setting" element={<Setting />}/>
   
  </Routes>
  </BrowserRouter>
 
   </>

  
  </div> 
  <p id='hw'>New York High Rise /Edit Tasks</p>    

   </div>
    
  
  );
}

export default App;
