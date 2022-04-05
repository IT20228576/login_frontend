import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Admin/Login";
import Register from "./components/Admin/Register";
import Navbar from "./components/layout/NavBar";
import AuthContext from "./context/AdminContext";
import Student from "./components/Student/students";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<p>home</p>} />

          {loggedIn === false && (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}

          {loggedIn === true && (
            <>
              <Route path="/student" element={<Student />} />
            </>
          )}

          <Route path="*" element={<p>error</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
