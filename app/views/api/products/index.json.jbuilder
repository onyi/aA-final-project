@products.each do |product|
  json.set! product.id do 
    json.partial! 'api/products/product', product: product, current_user: current_user
  end
end
