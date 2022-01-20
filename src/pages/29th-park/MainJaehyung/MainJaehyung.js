import React, { useState } from 'react';
import './MainJaehyung.scss';
import Nav from '../../../components/Nav/Nav';

function JaehyungMain() {
  const [newReple, setNewReple] = useState([]);
  const [repleInput, setRepleInput] = useState('');

  const clickBtn = e => {
    const newArray = [...newReple];
    newArray.push(repleInput);
    setNewReple(newArray);
  };
  const enter = e => {
    if (e.key === 'Enter') {
      let newArray = [...newReple];
      newArray.push(repleInput);
      setNewReple(newArray);
    }
  };
  return (
    <>
      <Nav />
      <div className="mainJaehyung">
        <div className="main">
          <div className="feed">
            <article className="article">
              <div>wecod_bootcamp</div>
              <div>WeCode-위코드</div>
              <img src="images/Park/MainPark/drum.webp" alt="drum" />
              <div className="comment-box" />
              {newReple.map(data => {
                return <Newreple data={data} />;
              })}
              <div className="repleBox">
                <input
                  onChange={e => {
                    setRepleInput(e.target.value);
                  }}
                  type="text"
                  placeholder="댓글 달기..."
                  onKeyDown={enter}
                />
                <button type="button" onClick={clickBtn}>
                  게시
                </button>
              </div>
            </article>
          </div>
          <div className="aside" />
        </div>
      </div>
    </>
  );
}

function Newreple(props) {
  return (
    <div className="reple-text">
      <span className="user-id">_2.22_v</span>
      <span className="user-reple">{props.data}</span>
    </div>
  );
}
export default JaehyungMain;
