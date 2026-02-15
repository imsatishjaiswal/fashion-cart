import "./App.css";
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
