import React from 'react';

import moment from 'moment';

import { Link, withRouter } from 'react-router-dom';

import ProductDiscussionVoteContainer from '../product_discussion_vote/product_discussion_vote_container';


class ProductDiscussionItem extends React.Component {
  constructor(props){
    super(props);
    this.postReply = this.postReply.bind(this);
    this.state = {
      body: "",
      id: `${props.discussion.id}`,
      productId: `${ props.discussion.product_id }`
    }
    this.update = this.update.bind(this);
    this.id = props.key;
    // console.log(`${JSON.stringify(props)}`);
  }

  update(e){
    e.preventDefault();
    this.setState({ [e.currentTarget.name] : e.currentTarget.value})
  }

  postReply(e){
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    // console.log(`Reply clicked; ${this.state.body}, ${this.state.id}, ${this.state.productId}`);
    this.props.postDiscussion(this.state);
    this.showReplyInput(this.state.id);
    
  }

  showReplyInput(id){
    let idPrefix = `discussion-reply-${id}`;
    // e.preventDefault();
    // console.log("Display reply component");
    let replyElement = $(`#${idPrefix}`);
    replyElement.is(":visible") ? replyElement.hide() : replyElement.show();
  }

  componentDidUpdate(prevProp){
    
  }

  render(){
    const { postDiscussion, discussion, isReply, level = 0, currentUser} = this.props;
    // console.log(`discussion: ${JSON.stringify(discussion)}, isReply: ${isReply}`);
    let padding = level * 40;
    return (
      // <div className={isReply  "discussion" : "discussion-reply"}>
      <li>
        <div className={`discussion ${isReply ? "discussion-reply" : ""}`} style={{ paddingLeft: `${padding}px` }} >
          <div className="discussion-user-detail">
            <img className="profile-img-thumbnail"
              src={discussion.author.profile_img ? discussion.author.profile_img : "https://static.thenounproject.com/png/538846-200.png"} />
            <p>{discussion.author.username}</p>
          </div>
          <div className="discussion-content-wrapper">
            <span>{discussion.body}</span>
            <div className="discussion-component-wrapper">
              {/* TODO: Use Product Discussion Vote with onClick listener */}
              <ProductDiscussionVoteContainer 
                discussionVoteCount={discussion.upvotes}
                discussionId={discussion.id}
                isUpvoted={discussion.isUpvoted}
              />
              {/* <div>
                <span>Upvote</span>
              </div> */}
              <div className="discussion__component">
                <span onClick={() => this.showReplyInput(discussion.id)}>Reply</span>
              </div>
              <div className="discussion__component">
                <span>{moment(discussion.created_at).format("YYYY-MM-DD HH:mm:ss zz")}</span>
              </div>
            </div>
            <div id={`discussion-reply-${discussion.id}`} className="discussion-reply-component" >
              <form className="discussion-reply-form" onSubmit={this.postReply} data-discussion-id={`${discussion.id}`}>
                <input type="text" name="body" id={`discussion-reply-text-${discussion.id}`} onChange={this.update}/>
                <input type="hidden" name="id" value={`${discussion.id}`} />
                {currentUser ? <input type="submit" className="button" value="Reply" /> : <Link to="/login" ><button className="button">Reply</button></Link>}
                
              </form>
            </div>
          </div>
        </div>

      </li>
    )
  }

}

export default withRouter(ProductDiscussionItem);