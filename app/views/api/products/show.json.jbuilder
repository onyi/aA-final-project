json.partial! 'api/products/product', product: @product, current_user: current_user, is_show: true
# if @product.photo
#   json.photoUrl url_for(@product.photo)
# end