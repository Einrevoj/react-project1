import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import './index.css'
import Signup from './pages/Signup'
import Project from './pages/Project';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Project' element={<Project />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
