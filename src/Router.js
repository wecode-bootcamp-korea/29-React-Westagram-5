import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginJiyoon from './pages/29th kim/LoginJiyoon/LoginJiyoon';
import MainJiyoon from './pages/29th kim/MainJiyoon/MainJiyoon';

import JaehyungLogin from './pages/29th-park/LoginJaehyung/LoginJaehyung';
import JaehyungMain from './pages/29th-park/MainJaehyung/MainJaehyung';

import JiwoonLogin from './pages/29th moon/LoginJiwoon/LoginJiwoon';
import JiwoonMain from './pages/29th moon/MainJiwoon/MainJiwoon';

import YejiLogin from './pages/29th-jang/LoginYeji/LoginYeji';
import YejiMain from './pages/29th-jang/MainYeji/MainYeji';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-Jiyoon" element={<LoginJiyoon />} />
        <Route path="/main-Jiyoon" element={<MainJiyoon />} />

        <Route path="/login-jaehyung" element={<JaehyungLogin />} />
        <Route path="/main-jaehyung" element={<JaehyungMain />} />

        <Route path="/login-jiwoon" element={<JiwoonLogin />} />
        <Route path="/main-jiwoon" element={<JiwoonMain />} />

        <Route path="/login-yeji" element={<YejiLogin />} />
        <Route path="/main-yeji" element={<YejiMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
