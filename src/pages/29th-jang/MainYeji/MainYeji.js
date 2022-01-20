import React, { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import CommentList from './CommentList';
import FeedList from './FeedList';
import './MainYeji.scss';

function YejiMain() {
  const [value, setValue] = useState('');
  const [newCommentList, setNewCommentList] = useState([]);

  const addComment = e => setValue(e.target.value);

  const commentUpload = () => {
    if (value.length > 0) {
      const newComment = {
        id: '',
        nickname: 'Yeji ',
        text: value,
      };

      setNewCommentList([...newCommentList, newComment]);
      setValue('');
    }
  };

  return (
    <div className="mainWrap">
      <main className="maincontainer">
        <Nav />
        <div className="main">
          <div className="feed">
            <article className="post">
              <div className="postTop">
                <img
                  className="profile"
                  src="/images/Jang/MainJang/myprofile.jpg"
                  alt="person"
                  width="30px"
                  height="30px"
                />
                <div>Ye_JI</div>
                <i className="fas fa-ellipsis-h" />
              </div>
              <div className="feedimg">
                <img
                  src="/images/Jang/MainJang/mainfeed.jpg"
                  alt="food"
                  width="500px"
                  height="500px"
                />
              </div>
              <div className="postText">
                <div className="postTextTop">
                  <i className="fas fa-heart" />
                  <i className="far fa-comment" />
                  <i className="fas fa-upload" />
                  <i className="far fa-bookmark" />
                </div>
                <div className="postTextMain">
                  <img
                    src="/images/Jang/MainJang/smalldog.jpg"
                    alt="dog"
                    width="20px"
                    height="20px"
                  />
                  <span>wecode님 외 10명이 좋아합니다</span>
                  <p> 주말에는 맛있는 bbq 파티! </p>
                </div>
                <form className="comment">
                  <ul className="commentOut">
                    {newCommentList.map((el, index) => (
                      <CommentList
                        key={index}
                        nickname={el.nickname}
                        text={el.text}
                      />
                    ))}
                  </ul>
                  <input
                    className="commentIn"
                    type="text"
                    placeholder="댓글 달기..."
                    onChange={addComment}
                    value={value}
                  />
                  <button
                    className="commentBt"
                    type="button"
                    onClick={commentUpload}
                  >
                    게시
                  </button>
                </form>
              </div>
            </article>
          </div>
          <div className="mainRight">
            <div className="nickname">
              <img
                src="/images/Jang/MainJang/computer.jpg"
                alt="computer"
                height="40px"
                width="40px"
              />
              <div className="nick">wecode</div>
            </div>
            <div className="story">
              <div className="storyTop">
                <div className="storyName">스토리</div>
                <div className="soryAll">모두보기</div>
              </div>
              <div className="storyList">
                <div className="storyimg">
                  <img
                    src="/images/Jang/MainJang/dog.jpg"
                    alt="bigdog"
                    width="50px"
                  />
                  <img
                    src="/images/Jang/MainJang/myprofile.jpg"
                    alt="myprofile"
                    width="50px"
                  />
                  <img
                    src="/images/Jang/MainJang/korea.jpg"
                    alt="korea"
                    width="50px"
                  />
                </div>
                <div className="storyNickName">
                  <p>ji3_tt</p>
                  <p>yej1py</p>
                  <p>jang0_s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default YejiMain;
