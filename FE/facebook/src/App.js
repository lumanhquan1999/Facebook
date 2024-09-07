import './App.css';
import LoginHome from './Component/LoginHome/LoginHome';
import Layout from './Component/MainPage/Layout';
import NavBar from './Component/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {
        localStorage.getItem("user") == undefined ? <LoginHome /> : <div className="main"><NavBar /><Layout /></div>
      }
    </div>
  );
}

export default App;
