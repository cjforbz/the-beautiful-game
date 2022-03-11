import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Stories from './Components/AllStories';

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/allStories" element={<Stories />} />
          <Route path="/" element={<Navigate replace to="/allStories" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
