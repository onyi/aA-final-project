json.merge! @product_vote.attributes
json.upvotedProducts current_user.upvoted_products.map{ |p| p.product_id }
json.upvotes @product_vote.product.upvotes.count
json.isUpvoted @product_vote.is_upvoted