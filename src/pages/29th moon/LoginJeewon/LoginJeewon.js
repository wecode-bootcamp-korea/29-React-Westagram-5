import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './LoginJeewon.scss';

function LoginJeewon() {
  const validId = () => {
    if (!IDInput.includes('@')) {
      alert('아이디를 다시 확인해주세요');
    } else {
    }
  };

  const fetchFunction = () => {
    fetch('http://10.58.3.67:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: IDInput,
        password: PWInput,
      }),
    }) // ip주소 request//kurly product의 데이터가 들어옴 예)"id:1 product: ~~ src: https://img"
      .then(response => response.json()) //json으로 받은걸 object형식으로 바꿈
      .then(result =>
        if(response.message === 'INVALID_FORMAT'){
          alert('아이디 / 비밀번호를 확인해주세요')
        });
  };

    const navigate = useNavigate();

  const [IDInput, handleIdInput] = useState('');
  const [PWInput, handlePwInput] = useState('');

  return (
    <div className="main-container">
      <main className="login-container">
        <span className="heading">Westargram</span>
        <div className="login-wrap">
          <input
            className="id-input"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={e => {
              handleIdInput(e.target.value);
            }}
          />
          <input
            className="password-input"
            type="password"
            placeholder="비밀번호"
            onChange={e => {
              handlePwInput(e.target.value);
            }}
          />
          <Link to="/main-Jeewon">
            <button
              className={
                IDInput.length && PWInput.length > 5
                  ? 'loginBtn-active'
                  : 'loginBtn-inactive'
              }
              // onClick={useEffect}
              onClick={fetchFunction}
            >
              로그인
            </button>
          </Link>
          <div className="reminder">
            <a href="google.com">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginJeewon;
