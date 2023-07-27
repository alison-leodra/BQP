import './App.css';
import { Administrador } from './Pages/Administrador';
import { Login } from './Pages/Login';
import { Mesero } from './Pages/Mesero';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/mesero' element={<Mesero />}></Route>
          <Route path='/administrador' element={<Administrador />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
