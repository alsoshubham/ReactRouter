/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import contacts from './components/contact';
import projects from './components/projects';
import about from './components/about';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<contacts/>}/>
      <Route path="/projects" element={<projects/>}/>
      <Route path="/about" element={<about/>}/>
      <Route path="*" element={<notFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
