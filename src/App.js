import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {  Routes, Route } from "react-router-dom";
import AllBook from "./pages/AllBooks/AllBooks.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/Signup.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import ViewDetails from "./components/ViewDetails/ViewDetails.jsx";
import Favorite from "./pages/Favorite/Favorite.jsx";
import History from "./pages/History/History.jsx";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 


function App() {
  return (
    <div className="all">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all-books" element={<AllBook />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Login" element={<Login />} />
        <Route path="viewDetails/:id" element={<ViewDetails />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/History" element={<History />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
