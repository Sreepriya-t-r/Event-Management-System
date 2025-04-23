import "./App.css";
import { Route, Routes } from "react-router-dom";
import 'antd/dist/reset.css';
import { ToastContainer } from 'react-toastify'
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";





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
  <Routes>
    <Route path="/login" element={<Login/>} ></Route>
    <Route path="/signup" element={<Signup/>} ></Route>

   <Header/>
   <Footer/>

  </Routes>
      
    </>
  );
}

export default App;
