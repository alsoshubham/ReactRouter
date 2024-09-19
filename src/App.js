/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';
import { Link } from 'react-router-dom';
// import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to ="/contact">Contact Us</Link></li>
          <li><Link to = "/about">About</Link></li>
        </ul>
      </nav>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      {/* <Route path="/NotFound" element={<NotFound/>}/> */}
     </Routes>
    </div>
  );
}

export default App;
