import React from 'react';
import LoadingIcon from '../loading_icon';


class ProductVote extends React.Component {
  constructor(props){
    super(props);
    // this.state = this.props;
  }

  componentDidUpdate(prevProps){
    console.log(`componentDidUpdate prevProps: ${JSON.stringify(prevProps)}`);
    console.log(`componentDidUpdate Props: ${JSON.stringify(prevProps)}`);

    // this.setState({
    //   isUpvoted: this.props.isUpvoted
    // })
  }

  render () {
    const { productVoteCount, 
      postUpvote, 
      deleteUpvote, 
      isUpvoted, 
      productId,
      loading } = this.props;

      // console.log(`Loading: ${loading}`);

    if (loading){
      return (<LoadingIcon />)
    }
    else{
      return (
        <div className="product-vote-button">
          <button className={`product-upvote ${isUpvoted ? "product-upvote-isupvoted" : "product-upvote-notupvoted"}`}
            onClick={() => isUpvoted ? deleteUpvote(productId) : postUpvote(productId)} >
            <i className="fas fa-caret-up"></i>
            {/* {isUpvoted ? <p> Cancel Upvote </p> : <p> Submit Upvote </p>} */}
            <p>{productVoteCount}</p>
          </button>
        </div>
      )
    }
  }
}


export default ProductVote;