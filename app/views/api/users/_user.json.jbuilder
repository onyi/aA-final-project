json.merge! user.attributes
json.upvoted_products user.upvoted_products.map{ |p| p.product_id }
