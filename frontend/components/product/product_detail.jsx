import React from 'react';

import LoadingIcon from '../loading_icon';

import {Modal} from '../../util/modal_util';

import ProductVoteContainer from '../product_vote/product_vote_container';

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
    const {product} = this.props;
    if (!product){
      return (<Modal><LoadingIcon /></Modal>)
    }else{
      return (
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="product-detail-wrapper">
            <h3>Product Detail Page</h3>
            <div className="product-detail-header-content">
              <div className="product-detail-header-container">
                <img src={product.header_img}></img>
              </div>
              <div className="product-detail-header-container">
                <div className="field">
                  <p>{product.title}</p>
                </div>
                <div className="field">
                  <h3>{product.header}</h3>
                </div>
              </div>
            </div>
            <div className="product-detail-main">
              <section className="product-detail-main-left">
                {/* Temporary place holder  */}
                <div className="product-detail-img">
                  <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"></img>
                </div>

              </section>
              <section className="product-detail-main-right">
                <div className="product-upvote-container product-upvote-detail" >
                  <ProductVoteContainer
                    productId={product.id}
                    productVoteCount={product.upvotes}
                    isUpvoted={product.is_upvoted}
                  /> 
                </div>
                <a href={product.link} className="product-link">
                  <div>
                    <i className="fas fa-compass"></i>
                    <div>
                      <h3>Website</h3>
                      <p>{product.link}</p>
                    </div>

                  </div>

                </a>
              </section> 
            </div>
          </div>

        </Modal>
      )
    }    
  }
}  


export default ProductDetail;