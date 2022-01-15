import React from 'react';
import './LoginJaehyung.scss';
import { useNavigate } from 'react-router-dom';

function JaehyungLogin() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/login-jaehyung');
  };
  return (
    <div>
      <div className="loginJaehyung">
        <div className="border">
          <div className="title">Westagram</div>
          <input
            className="user"
            type="text"
            placeholder="전화번호,사용자 이름 또는 번호"
          />
          <input className="password" type="password" placeholder="비밀번호" />
          <button className="btn" onClick={goToMain}>
            로그인
            {/* <Link to="/main"></Link> */}
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
