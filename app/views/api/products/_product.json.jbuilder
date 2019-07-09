# json.merge! product.attributes

json.merge! product.attributes.except("header_img")
if !product.header_img.include?('http')
  json.header_img image_path(product.header_img)
else
  json.header_img product.header_img
end
json.upvotes product.upvotes.count
json.is_upvoted (current_user && current_user.upvoted_products.map{ |p| p.product_id }.include?(product.id)) ? true : false
json.product_discussions []