import React from 'react';
import LoadingIcon from '../loading_icon';

import ProductIndexItem from './product_index_item';

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
    this.setState({
      loading: true
    });
  }

  componentDidUpdate(){
    if(this.props.loading != this.state.loading){
      this.setState({
        loading: this.props.loading
      });
    }
  }

  render(){
    const { loading, products, postUpvote } = this.props;
    console.log(`ProductIndex Render, props: ${JSON.stringify(this.props)} `);
    if (this.props.products.length === 0){
      return (<LoadingIcon />)
    }else{
      return (
        <div>
          <h2>Product Index Page</h2>
          <ul className="product-list-main">
            {products.map( 
              product => 
                <ProductIndexItem 
                  key={product.id} 
                  product={product} 
                  productId={product.id}
                  postUpvote={postUpvote} /> )}
          </ul>
        </div>
      )
    }

  }


}


export default ProductIndex;