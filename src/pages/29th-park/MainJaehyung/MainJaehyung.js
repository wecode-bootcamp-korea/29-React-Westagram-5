import React from 'react';
import './MainJaehyung.scss';

function JaehyungMain() {
  return (
    <div className="mainJaehyung">
      <class className="westagram" />

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
      <class />

      <div>
        <main className="main">
          <div className="feeds">
            <article />
          </div>
          <div className="main_right" />
        </main>
        <div className="reple">
          <input
            className="reple_place"
            type="text"
            placeholder="댓글달기..."
          />
          <button className="reple_btn">게시</button>
        </div>
      </div>
    </div>
  );
}
export default JaehyungMain;
