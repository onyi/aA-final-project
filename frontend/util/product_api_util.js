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
