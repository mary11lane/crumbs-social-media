import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage.jsx';
import ViewPage from '../pages/ViewPage.jsx';
import CreatePage from '../pages/CreatePage.jsx';
import EditPage from '../pages/EditPage.jsx';
import NotFoundPage from '../pages/NotFoundPage';

const RoutesComponent = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/feed" element={<ViewPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default RoutesComponent;
