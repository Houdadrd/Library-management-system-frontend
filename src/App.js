import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import AllBook from "./pages/AllBooks/AllBooks.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/Signup.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import ViewDetails from "./components/ViewDetails/ViewDetails.jsx";
import Favorite from "./pages/Favorite/Favorite.jsx";
import History from "./pages/History/History.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllOrders from "./pages/AllOrders/AllOrders.jsx";
import AddBooks from "./pages/AddBooks/AddBooks.jsx";
import { useAuth } from "./authContext.js";
import UpdateBook from "./pages/UpdateBook/UpdateBook.jsx";

function App() {
  const { role } = useAuth();
  return (
    <div className="all">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all-books" element={<AllBook />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Login" element={<Login />} />

        {role === "admin" && (
          <>
            <Route exact path="/all-orders" element={<AllOrders />} />
            <Route exact path="/add-book" element={<AddBooks />} />
          </>
        )}
        {role === "client" && (
          <>
            <Route path="/Favorite" element={<Favorite />} />
            <Route path="/History" element={<History />} />
            <Route exact path="/cart" element={<Cart />} />
          </>
        )}

        <Route path="viewDetails/:id" element={<ViewDetails />} />
        <Route path="/edit-book/:id" element={<UpdateBook />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
