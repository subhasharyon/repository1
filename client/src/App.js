import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import EditProfile from './components/EditProfile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/edit' element={<EditProfile/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
