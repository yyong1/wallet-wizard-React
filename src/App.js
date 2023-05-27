import logo from './logo-walletwizard-small.png';
// import './App.css';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div>
          <Homepage />
        </div>
        
    </div>
  );
}

export default App;
