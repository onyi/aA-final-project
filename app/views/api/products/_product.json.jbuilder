# json.merge! product.attributes

json.merge! product.attributes.except("header_img")

if product.header_img.nil?
  json.header_img ''
elsif !product.header_img.include?('http')
  json.header_img image_path(product.header_img)
else
   json.header_img product.header_img
end

# json.header_img product.header_img.attached? ? url_for(product.header_img) : product.header_img

# json.header_img ''

# if(product.header_img.attached?)
#   json.image url_for(product.header_img)
# end

json.upvotes product.upvotes.count
json.isUpvoted (current_user && current_user.upvoted_products.map{ |p| p.product_id }.include?(product.id)) ? true : false
json.discussionCount product.discussions.count
if is_show
  json.productImages product.product_images
end