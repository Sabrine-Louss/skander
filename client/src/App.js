import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './components/Menu';
import "./pages/styles.css"
import "./components/menu.css"


function App() {
  return (
    <>
      <div id="main">
        <Menu /><br/><br/><br/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
