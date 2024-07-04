import "./App.css";
import React from "react";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
