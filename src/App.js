// import { Route } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './login';
import Loginform from './loginform';
import Userhome from './userhome';
import Auditorium from './auditorium';
import Seminarhall from './seminarhall';
import Computerlab from './computerlab';
import VenueBookingPage from './booking page';
import Userapprove from './userapprove';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginform" element={<Loginform />} />
        <Route path="/userhome" element={<Userhome />} />
        <Route path="/auditorium" element={<Auditorium />} />
        <Route path="/seminarhall" element={<Seminarhall />} />
        <Route path="/computerlab" element={<Computerlab/>} />
        <Route path="/booking-page" element={<VenueBookingPage/>}/>
        <Route path="/approvalreportcontainer" element={<Userapprove/>}/>
      </Routes>
    </div>
  );
}

export default App;
