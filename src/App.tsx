import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { SharedLayout } from "./layout/SharedLayout";

const IssuesBoard = React.lazy(() => import('./pages/IssuesBoard').then(module => ({ default: module.IssuesBoard })));

const App: React.FC = () => {
  
    return (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<IssuesBoard />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </>
    );
  };

  export default App;

