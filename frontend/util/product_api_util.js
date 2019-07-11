export const fetchAllProducts = () => (
  $.ajax({
    url: 'api/products',
    method: "GET"
  })
);

export const fetchProduct = (id) => (
  $.ajax({
    url: `api/products/${id}`,
    method: "GET"
  })
);

export const fetchProductByPublisher = (publisher_id) => {
  return $.ajax({
    url: `api/products?publisher_id=${publisher_id}`,
    method: "GET"
  })
}

export const postProduct = (product) => {
  console.log(`post product: ${JSON.stringify(product)}`);
  return $.ajax({
    url: `api/products`,
    method: 'POST',
    data: product,
    contentType: false,
    processData: false
  })
}

export const updateProduct = (product) => {
  console.log(`update product: ${JSON.stringify(product)}`);
  return $.ajax({
    url: `api/products/${product.id}`,
    method: 'PATCH',
    data: product,
    contentType: false,
    processData: false
  })
}