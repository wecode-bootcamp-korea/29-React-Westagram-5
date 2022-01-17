import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './LoginJeewon.scss';

function LoginJeewon() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-Jeewon');
  };

  const validId = () => {
    if (!IDInput.includes('@')) {
      alert('아이디를 다시 확인해주세요');
    } else {
    }
  };
  // Mission 2 - IDInput state에 '@' 포함 여부 확인 함수

  const [IDInput, handleIdInput] = useState(''); //Mission 1
  const [PWInput, handlePwInput] = useState(''); //Mission 1
  // ======질문======: state 사용해서 isValid 구현 가능 여부
  // const [isValid, setIsValid] = useState(false);
  // ================================================
  //
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
              handleIdInput(e.target.value); //Mission 1
            }}
          />
          <input
            className="password-input"
            type="password"
            placeholder="비밀번호"
            onChange={e => {
              handlePwInput(e.target.value); //Mission 1
            }}
          />
          <Link to="/main-Jeewon">
            <button
              className={
                IDInput.length && PWInput.length > 5
                  ? 'loginBtn-active'
                  : 'loginBtn-inactive'
              }
              // Mission 2 - 조건 충족 여부에 따라 className 부여
              onClick={validId}
              // Mission 2 - '@' 포함 여부 onClick으로 구현

              // =========== 질문 ================
              // const [btnColor, setBtnColor] = useState('rgb(190, 226, 250)')
              // {
              //   IDInput.length && PWInput.length > 5
              //   ? setBtnColor('red')
              //   : setBtnColor('blue')
              // }
              // style={{backgroundColor: btnColor}}
              // className의 background-color 값과 inline-style의 값이 충돌해서 구현 불가능?
              // ================================
            >
              로그인
            </button>
          </Link>
          <div className="reminder">
            <a href="google.com">비밀번호를 잊으셨나요?</a>
          </div>
          <button onClick={goToMain} className="test">
            테스트: onClick으로 다른 페이지 이동
          </button>
        </div>
      </main>
    </div>
  );
}

// const goToMain = () => {
//   if(response.message === "valid user"){
//     navigate('/main');
//   } else {
//     alert("가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.")
//     navigate('/signup');
//   }
// }

//   return (
//     <div>
//       <button className="loginBtn" onClick={goToMain}>
//         로그인
//       </button>
//     </div>
//   );
// }

export default LoginJeewon;
