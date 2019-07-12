import { connect } from 'react-redux';

import ProductDiscussion from './product_discussion'

import {
  getDiscussions,
  postDiscussion,
  deleteDiscussion
} from '../../actions/product_discussion_action';


const msp = (state = {}, ownProps) => {
  return {
    productId: ownProps.productId,
    loading: state.ui.loading.product.discussionsLoading,
    discussions: Object.values(state.entities.discussions),
    currentUser: state.entities.users[state.session.currentUserId]
  }
}

const mdp = dispatch => {
  return {
    getDiscussions: (productId) => dispatch(getDiscussions(productId)),
    postDiscussion: (discussion) => dispatch(postDiscussion(discussion)),
    deleteDiscussion: (discussion) => dispatch(deleteDiscussion(discussion)),

  };
}

export default connect(msp, mdp)(ProductDiscussion);