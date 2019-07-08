import React from 'react';

import { Link } from 'react-router-dom';

const ProductIndexItem = ({product, isUpvoted, postUpvote, deleteUpvote}) => {
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
          </div>
        </Link>
        <div className="product-upvote-container">
          {/* Reserved for Product Upvote component */}
          <button className="product-upvote" onClick={isUpvoted ? deleteUpvote : postUpvote} >
            <i className="fas fa-caret-up"></i>
          </button>
        </div>
        <div>
          {/* Reserved for Product Comment component */}
        </div>

      </div>
    </li>
  );
};


export default ProductIndexItem;