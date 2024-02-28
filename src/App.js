
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import ApplyDoctoe from './pages/ApplyDoctoe';
import Notifications from './pages/Notifications';
import Userslist from './pages/Admin/Userslist';
import DoctorList from './pages/Admin/DoctorList';
import Profile from './pages/Doctor/Profile';
import BookApointment from './pages/BookApointment';
import Appointment from './pages/Appointment';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';

function App() {
  const {isLoading}=useSelector(state=>state.user)
  return (
    <div className="App">
    
     { (isLoading) && <div className='spinner-parent'>
      <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </div>}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/apply-doctor' element={<ApplyDoctoe />}></Route>
        <Route path='/notifications' element={<Notifications />}></Route>
        <Route path='/admin/userslist' element={<Userslist />}></Route>
        <Route path='/admin/doctorslist' element={<DoctorList />}></Route>
        <Route path='/doctor/profile/:userId' element={<Profile />}></Route>
        <Route path='/book-appointment/:doctorId' element={<BookApointment />}></Route>
        <Route path='/appointments' element={<Appointment />}></Route>
        <Route path='/doctor/appointments' element={<DoctorAppointments />}></Route>
      </Routes>
    </div>
  );
}

export default App;
