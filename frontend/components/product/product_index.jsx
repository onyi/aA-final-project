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
      productToShow: null,
      showMoveToTopButton: false,
      partialLoading: false
    }
    this.offset = 0,
    this.limit = 20,
    this.count = 20,
    this.scrollPosition = 0;
    this.showProductDetail = this.showProductDetail.bind(this);
    this.throttle = this.throttle.bind(this);
    this.debounce = this.debounce.bind(this);
  }

  debounce(callback, delay){
    let timer;
    let scrolled = false;

    return function(){
      const context = this;
      const args = arguments;

      clearTimeout(timer);

      let body = document.body;
      let html = document.documentElement;

      let scrolledHeight = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight;
      // console.log(`Scrolled Height: ${scrolledHeight}`);
      scrolled = scrolledHeight > window.innerHeight;
      let pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight);
      let bottomThreshold = pageHeight * 0.9;
      let bottomOfWindow =  scrolledHeight > bottomThreshold;

      if(bottomOfWindow && scrolled){
        // console.log(`Scrolled to bottom`);
        timer = setTimeout( () => {
          callback.apply(context, args)
        }, delay)
      }

    }

  }

  throttle(callback, waitTime){

    let ranOnce;
    let lastTimestamp;
    return function() {
      const context = this;
      const args = arguments;

      if(!ranOnce){
        callback.apply(context, args);
        lastTimestamp = moment();
        ranOnce = true;
      }else{
        setTimeout(
          callback.apply(context, args),
          waitTime - (moment() - lastTimestamp )
        )
      }




    }

  }


  componentDidMount(){
    // console.log(`ProductIndex`);
    this.props.getAllProducts(this.offset, this.limit);

    // let body = document.body;
    // let html = document.documentElement;

    let debounce = this.debounce(() => {
      this.offset = this.offset + this.limit;
      this.scrollPosition = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight;
      // if(this.offset < this.count)
      this.props.getAllProducts(this.offset, this.limit);
     }, 2000);

    window.onscroll = () => {
      debounce();
   }

  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (prevState.products.length < this.props.products.length) {
      console.log(`Move Y position ${this.scrollPosition}`);
      window.moveTo(0, this.scrollPosition);
    }
    return null;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // Are we adding new items to the list?
  //   // Capture the scroll position so we can adjust scroll later.
  //   if (prevProps.products.length < this.props.products.length) {
  //     console.log(`Move Y position ${this.scrollPosition}`);
  //     window.moveTo(0, this.scrollPosition);
  //   }
  //   return null;
  // }

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
            <ul className="product-list-index" >
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
              {this.props.partialLoading ? <LoadingIcon /> : ""}
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