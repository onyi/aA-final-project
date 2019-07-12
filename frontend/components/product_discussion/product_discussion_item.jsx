import React from 'react';

import { Link, withRouter } from 'react-router-dom';

const ProductDiscussionItem = ({ discussion, isReply }) => {
  

  // console.log(`discussion: ${JSON.stringify(discussion)}, isReply: ${isReply}`);

  return (
    // <div className={isReply  "discussion" : "discussion-reply"}>
    <li className="discussion">
      <div className="discussion-user-detail">
        <img className="profile-img-thumbnail" 
          src={discussion.author.profile_img ? discussion.author.profile_img : "https://static.thenounproject.com/png/538846-200.png"} />
        <p>{discussion.author.username}</p>
      </div>
      <div className="discussion-content-wrapper">
        <span>{discussion.body}</span>
      </div>
    </li>
  )

};


export default withRouter(ProductDiscussionItem);