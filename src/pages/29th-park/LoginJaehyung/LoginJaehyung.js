import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginJaehyung.scss';

function JaehyungLogin() {
  const [changeId, setChangeId] = useState('');
  const [changePw, setChangePw] = useState('');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-jaehyung');
  };
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

  const buttonAcctive = () => {
    return changeId.includes('@') && changePw.length > 5
      ? setIsActive(true)
      : setIsActive(false);
  };
  return (
    <div className="loginJaehyung">
      <div className="jaehyungPageTitle">Westagram</div>
      <input
        onChange={handleIdInput}
        className="userId"
        type="text"
        placeholder="전화번호,사용자 이름 또는 번호"
        onKeyUp={buttonAcctive}
      />
      <input
        onChange={handlePwInput}
        className="userPassword"
        type="password"
        placeholder="비밀번호"
        onKeyUp={buttonAcctive}
      />
      <button
        className="loginBtn"
        onClick={goToMain}
        // onClick={goToSignUp}
        disabled={isActive ? false : true}
      >
        로그인
        {/* <Link to="/main-jaehyung" /> */}
      </button>
      <span className="lostpassword">
        <a href="/">비밀번호를 잊으셨나요?</a>
      </span>
    </div>
  );
}

export default JaehyungLogin;
