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
        <div className="product-list">
          <div className="product-list-main">
            <div className="container-header">
              <h3>Products</h3>
            </div>
            <ul className="product-list-index">
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
          <div className="product-list-sidebar">
            <div>
              <h3 className="container-header">About</h3>
              <div className="list-container about">
                <p>Product Hub is a place for web user or creator to share products (both physical and digital) with other people!</p>
                <p>Creator's Profile</p>
                <div className="about-creator">
                  <a class="nav-link" href="https://github.com/onyi" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                  <a class="nav-link" href="https://www.linkedin.com/in/onyicho/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }


}


export default ProductIndex;