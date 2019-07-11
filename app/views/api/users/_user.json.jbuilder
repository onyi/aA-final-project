json.merge! user.attributes.except("password_digest", "session_token")
json.upvoted_products user.upvoted_products.map{ |p| p.product_id }
