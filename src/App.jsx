import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Categories from './components/categories/Categories';
import Accounts from './components/accounts/Accounts';
import Expenses from './components/Expenses/Expenses';
import Income from './components/income/Income';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
