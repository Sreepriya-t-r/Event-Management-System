import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BestWeddingVendors from "./pages/BestWeddingVendors";
import BookingPage from "./pages/BookingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotographersPage from "./components/weddingSevices/PhotographersPage";
import PhotographerProfile from "./components/profile/PhotographerProfile"
import BookingForm from "./components/bookingForm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VenuesProfile from "./components/profile/VenuesProfile";
import VenuesPage from "./components/weddingSevices/VenuesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bestWeddingVendors" element={<BestWeddingVendors />} />
      <Route path="/photographers" element={<PhotographersPage/>} />
      <Route path="/venues" element={<VenuesPage/>} />
        <Route path="/venues/:id/book" element={<BookingPage />} />
        <Route path="/venues/:id" element={<VenuesProfile />} />
        <Route path="/photographers/:id" element={<PhotographerProfile />} />
        <Route path="/venues/:id/book" element={<BookingForm type="venue" />} />
        <Route path="/photographers/:id/book" element={<BookingForm type="photographer" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
