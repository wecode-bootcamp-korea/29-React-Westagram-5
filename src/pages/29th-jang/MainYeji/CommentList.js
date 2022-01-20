import React from 'react';

const CommentList = props => {
  return (
    <li className="addNewComments">
      <span>{props.nickName}</span>
      <span>{props.text}</span>
    </li>
  );
};
export default CommentList;
