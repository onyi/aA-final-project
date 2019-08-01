import React from 'react';

import LoadingIcon from '../loading_icon';

import {Modal} from '../../util/modal_util';

import ProductVoteContainer from '../product_vote/product_vote_container';

import ProductDiscussionContainer from '../product_discussion/product_discussion_container';

import comingSoon from '../../../public/coming-soon.jpg';

class ProductDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      product: props.product,
      loading: true,
      show: true
    };
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount(){
    this.props.getProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProp){
    if (this.props.loading !== this.state.loading){
      this.setState({
        loading: this.props.loading
      });
    }
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal(e) {
    e.stopPropagation();
    this.setState({ show: false, errors: [] });
    this.props.history.goBack();
  }

  render(){
    const {product, loading } = this.props;

    if (!product){
    // if (loading){
      return (<Modal show={true}><LoadingIcon /></Modal>)
    } else{
      return (
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="product-detail-wrapper">
            {/* <h3>Product Detail</h3> */}
            <div className="product-detail-header-content">
              <div className="product-detail-header-container">
                <img className="product-detail-header-img" src={product.header_img}></img>
              </div>
              <div className="product-detail-header-container">
                <div className="field">
                  <h1>{product.title}</h1>
                </div>
                <div className="field">
                  <h3>{product.header}</h3>
                </div>
              </div>
            </div>
            <div className="product-detail-main">
              <section className="product-detail-main-left">
                {/* Temporary place holder for Product images gallery */}
                <div className="product-detail-img">
                    <img src={product.productImages.length !== 0 ? product.productImages[0].product_img : comingSoon}></img>
                </div>
                <div className="product-discussion">
                  <ProductDiscussionContainer productId={product.id} />
                </div>

              </section>
              <section className="product-detail-main-right">
                <div className="product-upvote-wrapper">
                  <label>Product Upvote</label>
                  <div className="product-upvote-container product-upvote-detail" >
                    <ProductVoteContainer
                      productId={product.id}
                      productVoteCount={product.upvotes}
                      isUpvoted={product.isUpvoted}
                    /> 
                  </div>
                </div>
                <div className="product-link-wrapper">
                  <a href={product.link} className="product-link">
                    <div className="product-link-content">
                      <i className="fas fa-compass"></i>
                      <div>
                        <h3>Website</h3>
                        <p>{product.link}</p>
                      </div>
                    </div>
                  </a>
                </div>
                
                {product.description ? 
                <div className="product-description-wrapper">
                  <h3>Description</h3>
                  <br />
                  <p>{product.description}</p>
                </div>
                : null }

              </section> 
            </div>
          </div>

        </Modal>
      )
    }    
  }
}  


export default ProductDetail;