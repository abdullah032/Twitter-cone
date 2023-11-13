import React from "react";
import ReactDOM from "react-dom/client";
import { Home, Profile, Explore, Notification } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  </BrowserRouter>
);
