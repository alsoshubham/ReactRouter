import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<div>home</div>}/>
      <Route path="/contact" element={<div>contact us</div>}/>
      <Route path="/projects" element={<div>projects</div>}/>
      <Route path="/about" element={<div>about me</div>}/>
     </Routes>
    </div>
  );
}

export default App;
