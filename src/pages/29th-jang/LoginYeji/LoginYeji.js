import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginYeji.scss';

function Login() {
  const [accountId, setAccountId] = useState('');
  const [accountPw, setAccountPw] = useState('');

  const handleIdInput = e => setAccountId(e.target.value);
  const handlePwInput = e => setAccountPw(e.target.value);

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yeji');
  };

  return (
    <div>
      <div className="logIn">
        <section className="loginBox">
          <div className="logo">westagram</div>
          <div className="inputForm">
            <div className="idForm">
              <input
                className="idInput"
                type="text"
                placeholder="전화번호,사용자 이름 또는 이메일"
                onChange={handleIdInput}
              />
            </div>
            <div className="pwForm">
              <input
                className="pwInput"
                type="password"
                placeholder="비밀번호"
                onChange={handlePwInput}
              />
            </div>
          </div>
          <button type="button" className="logB" onClick={goToMain}>
            로그인
          </button>
          <div className="lostpw">비밀번호를 잊으셨나요?</div>
        </section>
      </div>
      <script src="js/login.js" />
    </div>
  );
}

export default Login;
