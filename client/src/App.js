import Navbar from './components/NavigtaionBar.jsx';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx';
import Register from './pages/Register.jsx';
import Signin from './pages/Signin.jsx';
import Profile from './pages/Profile.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AboutUs from './pages/AboutUs.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage/>}></Route>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/book/:roomid/:fromDate/:toDate" exact element={<Booking/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/signin" exact element={<Signin/>}/>
        <Route path="/profile" exact element={<Profile/>}/>
        <Route path="/aboutus" exact element={<AboutUs/>}/>
        <Route path="/contactus" exact element={<ContactUs/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
