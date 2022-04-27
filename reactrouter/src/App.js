import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Docs from './components/Docs';
import Tutorial from './components/Tutorial';
import Community from './components/Community';
import HookState from './components/HookState';
import Todo from './components/Todo';
import Menu from './components/Menu';
import CleanUseEffectContainer from './components/CleanUseEffectContainer';
import Profile from './components/HookContext/Profile';


function App() {
  return (
    
    <BrowserRouter>
      <Menu/>  
      <Routes>
        <Route path="/" element={<Docs/>}/>
        <Route path="/tutorial" element={<Tutorial/>}/>  
        <Route path="/community" element={<Community/>}/>  
        <Route path="/useState" element={<HookState/>}/>  
        <Route path="/todo" element={<Todo/>}/>  
        <Route path="/cleanUseEffect" element={<CleanUseEffectContainer/>}/>  
        <Route path="/hookcontext" element={<Profile/>}/>  
      </Routes>
  
      
      
    </BrowserRouter>
  );
}

export default App;
