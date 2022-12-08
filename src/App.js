import { useEffect, useState } from "react";
import "./App.css";
//react router dom
import { Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  // check if user is logged in
  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);

  const isLoggedIN = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/auth`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.status === 200) {
        setAuth(true);
        setAuth1(false);
      }
      if (res.status === 401) {
        setAuth(false);
        setAuth1(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIN();
  }, []);

  return (
    <>
      <Navbar auth={auth1} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route element={<PrivateRoutes auth={auth1} />}>
          <Route exact path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes auth={auth1} />}>
          <Route exact path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoutes auth={auth} />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<PrivateRoutes auth={auth} />}>
          <Route exact path="/logout" element={<Logout />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
