import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header/Header';
import  Nav  from './components/Header/Nav';
import Login from './components/Login/Login';

function App() {
//   const [count, setCount] = useState(0)

  return (
    <div>
            <Nav/>
            <Header/>
            <Login/>
    </div>
);
}

export default App
