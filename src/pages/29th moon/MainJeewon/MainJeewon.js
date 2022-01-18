import React, { useState } from 'react';
import './MainJeewon.scss';
// import Navbar from 'src/components/Nav/Nav.js';

function MainJeewon() {
  const [newComment, setNewComment] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const postThis = e => {
    console.log('clicked'); //추후 삭제
    // e.preventDefault();========어떻게 사용?========
    const newArray = [...newComment];
    newArray.push(commentInput);
    setNewComment(newArray);
    // setCommentInput(''); ======input 초기화 질문 =========
  };

  const onKeyDown = e => {
    console.log('pressed enter'); // 추후 삭제
    // e.preventDefault(); ========어떻게 사용>========
    if (e.key === 'Enter') {
      let newArrayy = [...newComment];
      newArrayy.push(commentInput);
      setNewComment(newArrayy);
      // setCommentInput(''); ======input 초기화 질문 =========
    }
  };

  return (
    // <Nav />

    <>
      {/* <nav className="nav-main">
        <div className="main-div">
          <div className="nav-one">
            <img
              src="images/Moon/MainMoon/instagramLogo.png"
              alt="instagram"
              className="instalogo"
            />
          </div>
          <div className="nav-two">
            <input type="text" placeholder="검색" className="search-box" />
          </div>
          <div className="nav-three">
            <img
              src="images/Moon/MainMoon/dmLogo.png"
              alt="dm"
              className="icon icon-one"
            />
            <img
              src="images/Moon/MainMoon/heartLogo.png"
              alt="heart"
              className="icon icon-two"
            />
            <img
              src="images/Moon/MainMoon/homeLogo.png"
              alt="home"
              className="icon icon-three"
            />
            <img
              src="images/Moon/MainMoon/profilepic.png"
              alt="profPic"
              className="icon icon-four"
            />
          </div>
        </div>
      </nav> */}
      <main className="main-section">
        <section className="user-nav">
          <div>
            <img
              src="images/Moon/MainMoon/profilepic.png"
              alt="profilepic"
              className="img-profilepic"
            />
          </div>
          <div className="user-info">
            <p className="user-id">feature_byungMin</p>
            <p className="user-location">wecode</p>
          </div>
        </section>
        <section className="user-img">
          <img
            src="images/Moon/MainMoon/byungmin.png"
            alt="병민님"
            className="img-byungmin"
          />
        </section>
        <section className="main-comment-section">
          <div className="comment-icons">
            <div className="comment-icon-left">
              <img
                className="heart-icon"
                src="images/Moon/MainMoon/redheart.png"
                alt="heart"
              />
              <img
                className="comment-icon"
                src="images/Moon/MainMoon/comment.png"
                alt="comment"
              />
              <img
                className="dm-icon"
                src="images/Moon/MainMoon/dmLogo.png"
                alt="dm"
              />
            </div>
            <div className="comment-icon-right">
              <img
                className="share-icon"
                src="images/Moon/MainMoon/share.png"
                alt="share"
              />
            </div>
          </div>
          <div className="user-comment">
            <div className="user-comment-one">
              <span className="user-id-span">feature_byungMin</span>
              <span className="user-comment-span">오늘은 솔로 세션....? </span>
              <span className="user-comment-more more">더 보기 </span>
            </div>
            <div className="user-comment-one">
              <span className="view-more">모든 댓글 보기</span>
            </div>
            <div className="user-comment-next">
              <span className="user-id-span">iam_kim_korea213</span>
              <span className="user-comment-span">바로 들어가겠습니다!!!!</span>
            </div>
            <div className="user-comment-next">
              <span className="user-id-span">black_pink_Jennyy</span>
              <span className="user-comment-span">
                병민님 보고시퍼유ㅠㅠㅠㅠ
              </span>
              <img
                className="comment-likebtn"
                alt="heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </div>
            {/* {newComment.map(() => {
              <Comment newComment={newComment} />;
            })} */}

            {newComment.map(text => {
              return <Comment commentInput={text} />;
            })}
            {/* {newComment.map(a => {
              return (
                <div className="user-comment-next">
                  <span className="user-id-span">feature_byungMin</span>
                  <span className="user-comment-span">{a}</span>
                </div> //commentInput={CommentInput}
              );
            })} */}
          </div>
          <div className="time">21분 전</div>
          {/* input에 접근 onChange={e => {handlePwInput(e.target.value)}}
              comment를 배열로 저장
              배열에 추가하여 
          */}
          <div className="new-comment">
            <img
              src="images/Moon/MainMoon/smileicon.png"
              alt="smile"
              className="smile-icon"
            />
            <input
              className="write-new-comment"
              type="text"
              placeholder="새로운 댓글 ..."
              size="50"
              onChange={e => {
                setCommentInput(e.target.value);
              }}
              onKeyDown={onKeyDown}
            />
            <button //Mission 3
              className="upload-btn"
              onClick={postThis}
            >
              게시
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

function Comment(props) {
  return (
    <>
      <div className="user-comment-next">
        <span className="user-id-span">feature_byungMin</span>
        <span className="user-comment-span">{props.commentInput}</span>
      </div>
    </>
  );
}

// {
//   /* <div class="user-info">
//       <img src="" alt="profilepic" class="img-profilepic">
//       <span>feature_byungmin</span>
//       <p>wecode</p>
//     </div>
//     <div class="user-img">
//       <img src="" alt="병민님">
//     </div>
//   <div class="comment">
//     <p><b>jjburi_</b>&nbsp베이비나카</p>
//     <div class="comment_wrapper">
//       <div class="previous_comment">
//       <p><b>min_notming</b>&nbsp더 올려주세요ㅠ</p>
//       <img class="comment_likebutton" alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">
//       </div>
//     </div>
//   </div>
//   <div class="time">
//     <p>21분 전</p>
//   </div>

//   <div class="new_comment">
//     <input class="write_newComment" type="text" placeholder="새로운 댓글" size="50">
//     <button class="upload_button"><b>게시</b></button>
//   </div> */
// }
export default MainJeewon;
