import {connect} from 'react-redux';

import ProductVote from './product_vote';


import {
  createUpvote,
  deleteUpvote
} from '../../actions/product_action';

const msp = (state = {}, ownProps) => {
  
  // console.log(`Product Vote Container, ownProps: ${JSON.stringify(ownProps)}`);
  // console.log(`Product Vote Container, States: ${JSON.stringify(state)}`);
  // if (state.users){
  //   console.log(`Product Vote Container upvoted_products: ${state.users[state.currentUserId].upvoted_products}`);
  // }

  let loading = false;
  if (state.ui.loading.product.upvoteLoading){
    loading = state.ui.loading.product.upvoteLoading[ownProps.productId]
  }

  return {
    isUpvoted: ownProps.isUpvoted,
    productVoteCount: ownProps.productVoteCount,
    isLoggedIn: Boolean(state.session.currentUserId),
    loading: loading
    }
};

const mdp = dispatch => ({
  postUpvote: (id) => dispatch(createUpvote(id)),
  deleteUpvote: (id) => dispatch(deleteUpvote(id)),
});

export default connect(msp, mdp)(ProductVote);