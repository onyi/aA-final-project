# json.merge! product.attributes

json.merge! product.attributes.except("header_img")
if !product.header_img.include?('http')
  json.header_img image_path(product.header_img)
else
  json.header_img product.header_img
end
json.product_upvotes []
json.product_discussions []