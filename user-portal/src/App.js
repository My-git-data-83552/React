import { Route, Routes } from 'react-router';
import './App.css';
import Register from './screens/register';
import Login from './screens/login';
import Home from './screens/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />

      </Routes>
      <ToastContainer/>
     </div>
  );
}

export default App;
