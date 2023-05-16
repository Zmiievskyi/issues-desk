import React from 'react';
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Layout } from "./Layout/Layout";
// import GlobalStyle from "./GlobalStyle";
import { MainPage } from "./Pages/MainPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="main" element={<MainPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
};

export default App;
