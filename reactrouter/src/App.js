import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Docs from './components/Docs';
import Tutorial from './components/Tutorial';
import Community from './components/Community';
import Menu from './components/Menu';


function App() {
  return (
    
    <BrowserRouter>
      <Menu/>  
      <Routes>
        <Route path="/" element={<Docs/>}/>
        <Route path="/tutorial" element={<Tutorial/>}/>  
        <Route path="/community" element={<Community/>}/>  
      </Routes>
  
      
      
    </BrowserRouter>
  );
}

export default App;
