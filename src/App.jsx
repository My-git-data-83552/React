import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Bookings from './screens/Bookings';
import User from './screens/User';
import Property from './screens/Property';
import AddProperty from './screens/addProperty';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='property' element={<Property />} />
        <Route path='user' element={<User />} />
        <Route path='bookings' element={<Bookings />} />
        <Route path='addProperty' element={<AddProperty />} />
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
