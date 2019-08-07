import React from 'react';

import { Link } from 'react-router-dom';

import ProductVoteContainer from '../product_vote/product_vote_container';

const ProductIndexItem = ({ product, editable, openProductForm, deleteProduct }) => {

  return (
    <li>
      <div className="product-list-container">
        <Link to={`/product/${product.id}`} className="product-list-link">
          <div>
            <img className="product-header-image" src={product.header_img} />
          </div>
          <div className="product-info">
            <h3>{product.title}</h3>
            <p>{product.header}</p>
            <i className="fas fa-comments">
              <span>{product.discussion_count}</span>
            </i>
          </div>
        </Link>
        <div className="product-upvote-container">
          {/* Reserved for Product Upvote component */}
          <ProductVoteContainer 
            productId={product.id}
            productVoteCount={product.upvotes}
            isUpvoted={product.isUpvoted}
            />
        </div>
        { editable ? (
          <div className="product-edit-container">
            <Link to={`/product/edit/${product.id}`} >
              <button className="product-edit button" onClick={openProductForm} >Edit</button>
            </Link>
            <button className="button" onClick={() => deleteProduct(product.id)}>
              Delete
            </button>
          </div>) 
          : "" }

      </div>
    </li>
  );
};


export default ProductIndexItem;