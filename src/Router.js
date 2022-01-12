import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginJeeyoon from './pages/29th kim/LoginJeeyoon/LoginJeeyoon';
import MainJeeyoon from './pages/29th kim/MainJeeyoon/MainJeeyoon';
import JaehyungLogin from './pages/29th-park/JaehyungLogin';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-jeeyoon" element={<LoginJeeyoon />} />
        <Route path="/main-jeeyoon" element={<MainJeeyoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
