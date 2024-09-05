import './App.css';
import LoginHome from './Component/LoginHome/LoginHome';
import Layout from './Component/MainPage/Layout';
import NavBar from './Component/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {
        localStorage.getItem("user") == undefined ? <LoginHome /> : <span><NavBar /><Layout /></span>
      }
    </div>
  );
}

export default App;
