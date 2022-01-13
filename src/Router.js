import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginJeeyoon from './pages/29th kim/LoginJeeyoon/LoginJeeyoon';
import MainJeeyoon from './pages/29th kim/MainJeeyoon/MainJeeyoon';

import JaehyungLogin from './pages/29th-park/LoginJaehyung/LoginJaehyung';
import JaehyungMain from './pages/29th-park/MainJaehyung/MainJaehyung';

import JiwoonLogin from './pages/29th moon/LoginJiwoon/LoginJiwoon';
import JiwoonMain from './pages/29th moon/MainJiwoon/MainJiwoon';

import YejiLogin from './pages/29th-jang/LoginYeji/LoginYeji';
import YejiMain from './pages/29th-jang/MainYeji/MainYeji';

import NavBar from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-jeeyoon" element={<LoginJeeyoon />} />
        <Route path="/main-jeeyoon" element={<MainJeeyoon />} />

        <Route path="/login-jaehyung" element={<JaehyungLogin />} />
        <Route path="/main-jaehyung" element={<JaehyungMain />} />

        <Route path="/login-jiwoon" element={<JiwoonLogin />} />
        <Route path="/main-jiwoon" element={<JiwoonMain />} />

        <Route path="/login-yeji" element={<YejiLogin />} />
        <Route path="/main-yeji" element={<YejiMain />} />

        <Route path="/nav" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
