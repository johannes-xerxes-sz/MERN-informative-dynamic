import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin/components/AdminLogin";
import Home from "./Viewer/components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
