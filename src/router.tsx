import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function Router() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/:query?" element={<Home />} />
          <Route path="/detail/:name?" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;