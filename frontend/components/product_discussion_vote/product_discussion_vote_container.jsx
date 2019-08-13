import  {connect} from 'react-redux';

import ProductDiscussionVote from './product_discussion_vote';

import {
  postDiscussionVote,
  deleteDiscussionVote
} from '../../util/product_discussion_vote_api_util';


const msp = (state = {}, ownProps) => {

  let loading = false;
  if (state.ui.loading.product.discussionUpvoteLoading) {
    loading = state.ui.loading.product.discussionUpvoteLoading[ownProps.discussionId]
  }

  return {
    isUpvoted: ownProps.isUpvoted,
    isLoggedIn: Boolean(state.session.currentUserId),
    loading: loading,
    discussionVoteCount: ownProps.discussionVoteCount,
    discussionId: ownProps.discussionId
  }
}

const mdp = (dispatch) => {
  return {
    postDiscussionVote: (discussionId) => postDiscussionVote(discussionId), 
    deleteDiscussionVote: (discussionId) => deleteDiscussionVote(discussionId) 
  }
}

export default connect(msp, mdp)(ProductDiscussionVote);


