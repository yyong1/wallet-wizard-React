import logo from './logo-walletwizard-small.png';
// import './App.css';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Categories from './components/categories/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/categories' element={<Categories />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
