import React from 'react';
import LoadingIcon from '../loading_icon';

import ProductIndexItem from './product_index_item';

import ProductVoteContainer from '../product_vote/product_vote_container';

import { Link } from 'react-router-dom';

import moment from 'moment';

import ProductDetailContainer from './product_detail_container';




class ProductIndex extends React.Component {

  constructor(props){
    super(props);
    // console.log(`ProductIndex Constructor: ${JSON.stringify(props)} `);
    this.state = {
      loading: true,
      modalOpen: false,
      productToShow: null
    }
    this.showProductDetail = this.showProductDetail.bind(this);
  }

  componentDidMount(){
    // console.log(`ProductIndex`);
    this.props.getAllProducts();

  }

  componentDidUpdate(){

  }

  showProductDetail(productId){
    if(this.state.modalOpen){
      this.setState({
        modalOpen: false,
        productToShow: null
      })
    }else{
      this.setState({
        modalOpen: true,
        productToShow: productId
      })
    }

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
          { this.state.modalOpen ? <ProductDetailContainer productId={this.state.productToShow} onClose={this.showProductDetail} /> : ""}
          <div className="product-list-main">
            <div className="container-header">
              <h3>Products</h3>
            </div>
            <ul className="product-list-index">
              {products.sort( (a,b) => {
                return b.id - a.id;
              })
              .map( 
                product => 
                  <ProductIndexItem 
                    key={product.id} 
                    product={product} 
                    productId={product.id}
                    postUpvote={postUpvote}
                    deleteUpvote={deleteUpvote}
                    deleteProduct={deleteProduct}
                    showProductDetail={this.showProductDetail}
                  /> 
              )}
            </ul>
          </div>
          <div className="product-list-sidebar">
            <div>
              <div>
                <h3 className="container-header">About</h3>
                <div className="list-container about">
                  <p>Product Hub is a place for web user or creator to share products (both physical and digital) with other people!</p>
                  <p>Creator's Profile</p>
                  <div className="about-creator">
                    <a className="nav-link" href="https://github.com/onyi" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                    <a className="nav-link" href="https://www.linkedin.com/in/onyicho/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="container-header">Advertisement</h3>
                <div className="list-container ">
                  <div className="advertisement">
                    <p>Join App Academy Today!</p>
                    <img className="app-academy-logo" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2005/s300/logo-emblem-red-1000-1-.jpg" />
                  </div>
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