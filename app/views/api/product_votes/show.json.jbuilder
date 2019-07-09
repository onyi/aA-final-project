json.merge! @product_vote.attributes
json.upvoted_products current_user.upvoted_products.map{ |p| p.product_id }
json.upvotes @product_vote.product.upvotes.count
json.is_upvoted @product_vote.is_upvoted