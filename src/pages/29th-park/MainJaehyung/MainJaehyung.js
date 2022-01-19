import React, { useState } from 'react';
import './MainJaehyung.scss';

function JaehyungMain() {
  const [newReple, setNewReple] = useState([]);
  const [repleInput, setRepleInput] = useState('');

  const clickBtn = () => {
    let newArray = [...newReple];
    newArray.push(repleInput);
    setNewReple(newArray);
  };
  const enter = e => {
    if (e.key === 'Enter') {
      let newArray = [...newReple];
      newArray.push(setNewReple);
      setNewReple(newArray);
    }
  };
  return (
    <div className="mainJaehyung">
      <nav className="navigation">
        <div className="logo_bar">
          <img
            className="logo_picture"
            src="Images/Park/MainPark/westagram.png"
            alt="인스타그램 로고"
          />
          <div className="vertical_bar" />
          <span className="logo_name">instagram</span>
        </div>
        <div className="search_space">
          <input className="search_bar" type="text" placeholder="검색" />
        </div>
        <div className="right_menu">
          <img alt="탐색" src="images/Park/MainPark/explore.png" />
          <img alt="하트" src="Images/Park/MainPark/heart.png" />
          <img alt="마이페이지" src="Images/Park/MainPark/profile.png" />
        </div>
      </nav>
      <div className="main">
        <div className="feed">
          <article className="article">
            <div>wecod_bootcamp</div>
            <div>WeCode-위코드</div>
            <img src="images/Park/MainPark/drum.webp" alt="drum" />
            <div className="repleBox">
              <input
                onChange={e => {
                  setRepleInput(e.target.value);
                }}
                type="text"
                placeholder="댓글 달기..."
              />
              <button onClick={clickBtn}>게시</button>
            </div>
          </article>
        </div>
        <div className="aside" />
      </div>
    </div>
  );
}
export default JaehyungMain;
