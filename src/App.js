
import './App.css';
import Login from './components/Login';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
          <Navigation />
          
          <div className='container mt-5'>
          <div className='display-1 mt-5 mb-5 text-center'>Login Form</div>
          <Login />
          </div>
          
    </div>
  );
}

export default App;
