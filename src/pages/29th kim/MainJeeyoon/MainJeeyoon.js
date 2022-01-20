import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './MainJeeyoon.scss';
import Nav from '../../../components/Nav/Nav';

const Main = () => {
  // const navigate = useNavigate();

  // const goToLogin = () => {
  //   navigate('/');
  // };

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [addComment, setAddComment] = useState('false');

  const handleCommentInput = event => {
    commentList(event.target.value);
  };

  const postEnter = e => {
    if (e.key === 'Enter') {
      let arrayCopyEnter = [...commentList];
      arrayCopyEnter.push(comment);
      setCommentList(arrayCopyEnter);
      setComment('');
    }
  };

  const postClick = () => {
    const arrayCopy = [...commentList];
    arrayCopy.push(comment);
    setCommentList(arrayCopy);
    setComment('');
  };

  return (
    <>
      <Nav />
      {/* <!--main--> */}
      <main>
        <div className="feeds">
          {/* <!--article--> */}
          <article>
            <header className="articleHeader">
              <div className="articleProfile">
                <img
                  className="imgProfile"
                  src="/images/Kim/MainKim/yoon.jpeg"
                  alt="imgProfile"
                />
                <span className="userID mainId fontPoint">and_you</span>
              </div>

              <i className="fas fa-ellipsis-h" />
            </header>

            <div className="mainImage">
              <img
                src="/images/Kim/MainKim/feed.jpeg"
                alt="and_you님의 피드 사진"
                className="mainPic"
              />
            </div>

            <nav className="iconsReact">
              <div className="iconsLeft">
                <img
                  alt="likeReact"
                  className="iconReact"
                  src="/images/Kim/MainKim/like.png"
                />
                <img
                  alt="commentReact"
                  className="iconReact"
                  src="/images/Kim/MainKim/comment.png"
                />
                <img
                  alt="shareReact"
                  className="iconReact"
                  src="/images/Kim/MainKim/share.png"
                />
              </div>
              <img
                alt="save"
                className="iconReact"
                src="/images/Kim/MainKim/save.png"
              />
            </nav>

            {/* <!-- article text data --> */}
            <div className="reaction">
              <div className="likedPeople">
                <img
                  className="pic"
                  src="/images/Kim/MainKim/yoon6.jpeg"
                  alt="earpearp님의 프로필 사진"
                />
                <p>
                  <span className="fontPoint">earpearp</span>님{' '}
                  <span className="fontPoint">외 여러명</span>이 좋아합니다
                </p>
              </div>

              <div className="description">
                <p>
                  <span className="fontPoint userID">and_you</span>
                  <span className="atTag">@coding @koo</span> 😍
                </p>
              </div>

              <div className="commentSection">
                <ul className="comments">
                  <li>
                    <span>
                      <span className="fontPoint userID">
                        bestsilveristhebest
                      </span>
                      여기 어디에요? 😀
                    </span>
                    <img
                      className="commentHeart"
                      src="/images/Kim/MainKim/heart.png"
                      alt="하트"
                    />
                  </li>
                </ul>

                {
                  //  이렇게 쓰게 되면 추가되거나 삭제됐을 경우 index가 달라져서 값의 고유한 index가 사라질 수 있으므로 보통 상수 데이터의 경우,
                  // { id:1, footer: "컬리 영상"} 이렇게 사용함

                  commentList.map((reaction, i) => {
                    return <OneComment reaction={reaction} key={i} />;
                  })
                }
                <div className="timeLog">
                  <span>32분 전</span>
                </div>
              </div>
              <div className="comment">
                <input
                  id="commentInput"
                  className="commentInput"
                  type="text"
                  placeholder="reaction 달기..."
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  onKeyDown={postEnter}
                />
                <button
                  type="submit"
                  className="commentSubmit"
                  onClick={postClick}
                >
                  게시
                </button>
              </div>
            </div>
          </article>
        </div>
        {/* <!--aside--> */}

        <div className="mainRight">
          <div className="myProfile">
            <img
              alt="jiyoon"
              className="pic"
              src="/images/Kim/MainKim/jiyoon.jpeg"
            />
            <div>
              <span className="userID fontPoint">seizetheday</span>
              <span className="subSpan">JIYOON KIM</span>
            </div>
          </div>

          {/* <!-- story section --> */}
          <div className="section-story">
            <div className="menuTitle">
              <span className="subTitle">스토리</span>
              <span className="findMore">모두 보기</span>
            </div>

            <ul className="story-list">
              <li>
                <div className="gradientWrap">
                  <img
                    alt="chan"
                    className="imgProfile story"
                    src="/images/Kim/MainKim/chan2.jpeg"
                  />
                </div>
                <div className="profileText">
                  <span className="userID fontPoint">lovelychaeeun</span>
                  <span className="overtime">10분 전</span>
                </div>
              </li>

              <li>
                <div className="gradientWrap">
                  <img
                    alt="goeun"
                    className="imgProfile story"
                    src="/images/Kim/MainKim/goeun.png"
                  />
                </div>
                <div className="profileText">
                  <span className="userID fontPoint">bestsilveristhebest</span>
                  <span className="overtime">20분 전</span>
                </div>
              </li>

              <li>
                <div className="gradientWrap">
                  <img
                    alt="chan"
                    className="imgProfile story"
                    src="/images/Kim/MainKim/chan1.jpeg"
                  />
                </div>
                <div className="profileText">
                  <span className="userID fontPoint">superchan</span>
                  <span className="overtime">1시간 전</span>
                </div>
              </li>

              <li>
                <div className="gradientWrap">
                  <img
                    alt="goeun"
                    className="imgProfile story"
                    src="/images/Kim/MainKim/goeun.jpeg"
                  />
                </div>
                <div className="profileText">
                  <span className="userID fontPoint">goeun_lovely</span>
                  <span className="overtime">10분 전</span>
                </div>
              </li>
            </ul>
          </div>

          {/* <!-- recommendation --> */}
          {/* <!-- recommendation section --> */}
          <div className="sectionRecommend">
            <div className="menuTitle">
              <span className="subTitle">회원님을 위한 추천</span>
              <span className="findMore">모두 보기</span>
            </div>

            <ul className="recommendList">
              <li>
                <div className="recommendFriendProfile">
                  <img
                    className="imgProfile"
                    src="/images/Kim/MainKim/yoon3.jpeg"
                    alt="howareyou님의 프로필 사진"
                  />
                  <div className="profileText">
                    <span className="userID fontPoint">howareyou</span>
                    <span className="subSpan">
                      lovelychaeeun님 외 2명이...{' '}
                    </span>
                  </div>
                </div>
                <span className="btnFollow">팔로우</span>
              </li>

              <li>
                <div className="recommendFriendProfile">
                  <img
                    className="imgProfile"
                    src="/images/Kim/MainKim/imfine.jpeg"
                    alt="imfine님의 프로필 사진"
                  />
                  <div className="profileText">
                    <span className="userID fontPoint">imfine</span>
                    <span className="subSpan">
                      bestsilveristhebest님 외 3명이...
                    </span>
                  </div>
                </div>
                <span className="btnFollow">팔로우</span>
              </li>
              <li>
                <div className="recommendFriendProfile">
                  <img
                    className="imgProfile"
                    src="/images/Kim/MainKim/hello.jpeg"
                    alt="thankyou님의 프로필 사진"
                  />
                  <div className="profileText">
                    <span className="userID fontPoint">thankyou</span>
                    <span className="subSpan">momo님 외 5명이 팔로우합...</span>
                  </div>
                </div>
                <span className="btnFollow">팔로우</span>
              </li>
            </ul>
          </div>

          <footer>
            <p>
              instagram ∙ 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙
              개인정보처리방침 ∙ 약관 ∙ 디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어
            </p>
            <p>© 2021 INSTAGRAM</p>
          </footer>
        </div>
      </main>
    </>
  );
};

function OneComment(props) {
  return (
    <ul className="comments">
      <li>
        <span>
          <span className="fontPoint userID">seizetheday</span>
          {props.reaction}
        </span>
        <img
          className="commentHeart"
          src="/images/Kim/MainKim/heart.png"
          alt="하트"
        />
      </li>
    </ul>
  );
}

export default Main;
