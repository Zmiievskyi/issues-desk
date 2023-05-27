import React from 'react';
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

import "./App.css";

import { Layout } from "./layout/Layout";
import { IssuesBoard } from './pages/IssuesBoard';

const App: React.FC = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IssuesBoard />} />
          <Route path="main" element={<IssuesBoard />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
};

export default App;
