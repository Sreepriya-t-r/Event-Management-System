import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/user/Dashboard";
import BestWeddingVendors from "./pages/user/BestWeddingVendors";
// import BookingPage from "./pages/user/BookingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotographersPage from "./pages/user/weddingSevices/PhotographersPage";
import PhotographerProfile from "./pages/user/profile/PhotographerProfile"
import BookingForm from "./pages/user/booking/bookingForm";
import Home from "./pages/user/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import VenuesProfile from "./pages/user/profile/VenuesProfile"
import VenuesPage from "./pages/user/weddingSevices/VenuesPage";
import VenueBooking from "./pages/user/booking/VenueBooking";
import { ToastContainer } from 'react-toastify'
import CaterersPage from "./pages/user/weddingSevices/CaterersPage";
import CatererProfile from "./pages/user/profile/CatererProfile";
import AdminDashboard from "./pages/admin/AdminDashboard";
// import UserProfile from "./pages/user/userProfile";



function App() {
  return (
    <>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
// transition={Bounce}
/>
  
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login  />}  />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/bestWeddingVendors" element={<BestWeddingVendors />} />
      <Route path="/photographers" element={<PhotographersPage/>} />
      <Route path="/venues" element={<VenuesPage/>} />
      <Route path="/caterer" element={<CaterersPage/>} />
        <Route path="/venues/:id" element={<VenuesProfile />} />
        <Route path="/photographers/:id" element={<PhotographerProfile />} />
        <Route path="/caterer/:id" element={<CatererProfile />} />
       <Route path="/venues/:id/VenueBooking" element={<VenueBooking type="venue" />} />
        <Route path="/photographers/:id/book" element={<BookingForm type="photographer" />} />

        <Route path="/admin/dashboard" element={<AdminDashboard  />} />



      </Routes>
      <Footer />
    </>
  );
}

export default App;
