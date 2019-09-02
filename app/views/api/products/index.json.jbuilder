
json.products do
  @products.each do |product|
    json.set! product.id do 
      json.partial! 'api/products/product', product: product, current_user: current_user, is_show: false
    end
  end
end

json.total Product.all.count
json.offset @offset.to_i
json.limit @limit.to_i