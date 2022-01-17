import React, { useState } from 'react';
import './LoginJaehyung.scss';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function JaehyungLogin() {
  const [changeId, setChangeId] = useState('');
  const [changePw, setChangePw] = useState('');
  // // const navigate = useNavigate();
  // // const goToMain = () => {
  // //   navigate('/login-jaehyung');
  // };
  const handleIdInput = e => {
    setChangeId(e.target.value);
  };
  const handlePwInput = e => {
    setChangePw(e.target.value);
  };
  return (
    <div>
      <div className="loginJaehyung">
        <div className="border">
          <div className="title">Westagram</div>
          <input
            onChange={handleIdInput}
            className="user"
            type="text"
            placeholder="전화번호,사용자 이름 또는 번호"
          />
          <input
            onChange={handlePwInput}
            className="password"
            type="password"
            placeholder="비밀번호"
          />
          <button className="btn">
            로그인
            <Link to="/main" />
          </button>
          <span className="lostpassword">
            <a href="/">비밀번호를 잊으셨나요?</a>
          </span>
        </div>
        <script src="js/login.js" />
      </div>
      ;
    </div>
  );
}

export default JaehyungLogin;
