import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginYeji.scss';

function Login() {
  const [accountId, setAccountId] = useState();
  const [accountPw, setAccountPw] = useState();

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const handleIdChange = e => {
    setIdValid(e.target.value.includes('@'));
    setAccountId(e.target.value);
  };

  const handlePwChange = e => {
    setPwValid(e.target.value.length >= 5);
    setAccountPw(e.target.value);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    fetch('http://10.58.3.161:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: accountId,
        password: accountPw,
        name: '',
        phone: '',
        account: '',
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
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
                onChange={e => handleIdChange(e)}
              />
            </div>
            <div className="pwForm">
              <input
                className="pwInput"
                type="password"
                placeholder="비밀번호"
                onChange={e => handlePwChange(e)}
              />
            </div>
          </div>
          <button
            type="button"
            className="logB"
            disabled={!idValid || !pwValid}
            onClick={goToMain}
          >
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
