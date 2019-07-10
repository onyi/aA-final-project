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

export const postProduct = (product) => {
  console.log(`post product: ${JSON.stringify(product)}`);
  return $.ajax({
    url: `api/products`,
    method: 'POST',
    data: { product }
  })
}