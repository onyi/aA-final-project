import React from 'react';

import {Link} from 'react-router-dom';
import { renderError } from '../../actions/error_action';

class ProductDiscussionVote extends React.Component{
  constructor(props){

    super(props);

    this.state = {
      discussionVoteCount: props.discussionVoteCount || 0,
      isUpvoted: props.isUpvoted
    }

    this.deleteDiscussionVote = this.deleteDiscussionVote.bind(this);
    this.postDiscussionVote = this.postDiscussionVote.bind(this);


  }

  deleteDiscussionVote() {
    this.props.deleteDiscussionVote(this.props.discussionId)
      .then( res => {
        this.setState({
          discussionVoteCount: this.state.discussionVoteCount -= 1,
          isUpvoted: false
        })
      })
      .catch(err => {
        // console.log(err);
        renderError(err.responseJSON)
      });
  }

  postDiscussionVote() {
    this.props.postDiscussionVote(this.props.discussionId)
      .then( res => {
        this.setState({
          discussionVoteCount: this.state.discussionVoteCount += 1,
          isUpvoted: true
        })
      })
      .catch( err => {
        // console.log(err);
        renderError(err.responseJSON)
      });
  }



  render(){
    const { discussionVoteCount, isUpvoted } = this.state;

    const { isLoggedIn, loading } = this.props;

    let upvoteAction = isLoggedIn ? (
      <span onClick={isUpvoted ? this.deleteDiscussionVote : this.postDiscussionVote}
        className={isUpvoted ? "discussion-upvoted" : "discussion-notupvoted"}>
        Upvote ({discussionVoteCount})
      </span>
    ) : (
      <Link to="/login">
        <span>
          Upvote ({discussionVoteCount})
        </span>
      </Link>
    );

    return (
      <div className="product-discussion-vote discussion__component">
        {upvoteAction}
      </div>
    )

  }



}

export default ProductDiscussionVote;