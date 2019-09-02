json.merge! user.attributes.except("password_digest", "session_token")
json.upvotedProducts user.upvoted_products.map{ |a| a.id }
json.publishedProducts user.published_products.map{ |b| b.id }
