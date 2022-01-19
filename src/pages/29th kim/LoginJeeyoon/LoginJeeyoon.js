import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginJeeyoon.scss';

const Login = () => {
  //event가 일어난 input태그에 'event.target.value' 넣을 변경 함수 선언 및 할당
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleIdInput = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  // main으로 이동
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-jeeyoon');
  };

  //유효성 검사
  const checkValidaton = event => {
    if (email.includes('@') && password.length >= 5) {
      {
        goToMain();
      }
    }
    if (email.includes('@') === false) {
      alert('ID는 @포함');
    }
    if (password.length < 5) {
      alert('PW는 5자 이상');
    }
  };

  const activeBtn = email.includes('@') && password.length >= 5;

  const signUp = () => {
    fetch('http://10.58.5.6:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          goToMain();
        } else if (result.message === 'INVALID_EMAIL') {
          alert('이메일을 확인해주시기 바랍니다.');
        } else if (result.message === 'INVALID_USER (password)') {
          alert('비밀번호를 확인해주시기 바랍니다.');
        }
        console.log('결과: ', result);
      });
  };

  return (
    <div class="section">
      <section>
        <div className="loginPage">
          <div class="title">Westagram</div>

          {/* <form> */}
          <div className="loginInput">
            <input
              onChange={handleIdInput}
              className="email"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={handlePasswordInput}
              className="password"
              type="password"
              placeholder="비밀번호"
            />
          </div>

          <button
            type="button"
            className="logoffBtn"
            onClick={checkValidaton}
            style={{ backgroundColor: activeBtn ? '#0095f6' : '#c4e6fd' }}
          >
            로그인
          </button>
          {/* </form> */}

          <div
            id="loginAlert"
            onClick={() => alert('행복한 하루 되시기 바랍니다.')}
          >
            이메일 주소 또는 비밀번호를 잊으셨나요?
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
