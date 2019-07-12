import React from 'react';
import LoadingIcon from '../loading_icon';

import ProductIndexItem from './product_index_item';

import ProductVoteContainer from '../product_vote/product_vote_container';

import { Link } from 'react-router-dom';




class ProductIndex extends React.Component {

  constructor(props){
    super(props);
    // console.log(`ProductIndex Constructor: ${JSON.stringify(props)} `);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    // console.log(`ProductIndex`);
    this.props.getAllProducts();

  }

  componentDidUpdate(){

  }

  render(){
    const { loading, products, postUpvote, deleteUpvote, deleteProduct } = this.props;
    // console.log(`${deleteProduct}`);
    // console.log(`ProductIndex Render, props: ${JSON.stringify(this.props)} `);
    // if (this.props.products.length === 0){
    if (loading){
      return (<LoadingIcon />)
    }else{
      return (
        <div>
          <ul className="product-list-main">
            {products.map( 
              product => 
                <ProductIndexItem 
                  key={product.id} 
                  product={product} 
                  productId={product.id}
                  postUpvote={postUpvote}
                  deleteUpvote={deleteUpvote}
                  deleteProduct={deleteProduct}
                /> 
            )}
          </ul>
        </div>
      )
    }

  }


}


export default ProductIndex;