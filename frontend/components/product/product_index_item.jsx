import React from 'react';

import { Link } from 'react-router-dom';

import ProductVoteContainer from '../product_vote/product_vote_container';

const ProductIndexItem = ({ product }) => {
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
            {/* Reserved for Product Comment component */}
            <i className="fas fa-comments"></i>
          </div>
        </Link>
        <div className="product-upvote-container">
          {/* Reserved for Product Upvote component */}
          <ProductVoteContainer 
            productId={product.id}
            productVoteCount={product.upvotes}
            isUpvoted={product.is_upvoted}
            />
        </div>

      </div>
    </li>
  );
};


export default ProductIndexItem;