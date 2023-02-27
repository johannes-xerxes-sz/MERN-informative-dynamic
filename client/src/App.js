import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin/components/auth/AdminLogin";
import HomeViewer from "./Viewer/components/HomeViewer";

function App()  {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeViewer />}  />
          <Route path="/admin" element={<Admin />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
