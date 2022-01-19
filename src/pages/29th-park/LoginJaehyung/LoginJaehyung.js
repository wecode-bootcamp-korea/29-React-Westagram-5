import React, { useState } from 'react';
import './LoginJaehyung.scss';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function JaehyungLogin() {
  const [changeId, setChangeId] = useState('');
  const [changePw, setChangePw] = useState('');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  // const goToMain = () => {
  //   navigate('/main-jaehyung');
  // };
  const goToSignUp = () => {
    fetch('http://10.58.3.35:80/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: changeId,
        password: changePw,
        // name: 'park',
        // phone: '010-2323-3232',
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };
  const handleIdInput = e => {
    setChangeId(e.target.value);
  };
  const handlePwInput = e => {
    setChangePw(e.target.value);
  };

  const isLoginAbled = () => {
    return changeId.includes('@') && changePw.length > 5
      ? setIsActive(true)
      : setIsActive(false);
  };
  // const idAcctiveBtn = e => {
  //   setIdVal(e.target.value.includes('@'));
  // };
  // const pwAcctiveBtn = e => {
  //   setPwVal(e.target.value.lenght >= 5);
  // };
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
            onKeyUp={isLoginAbled}
          />
          <input
            onChange={handlePwInput}
            className="password"
            type="password"
            placeholder="비밀번호"
            onKeyUp={isLoginAbled}
          />
          <button
            className="btn"
            // onClick={goToMain}
            onClick={goToSignUp}
            disabled={isActive ? false : true}
          >
            로그인
            {/* <Link to="/main-jaehyung" /> */}
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
