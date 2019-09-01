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
    url: `api/products/search?publisher_id=${publisher_id}`,
    method: "GET"
  })
}

export const postProduct = (product) => {
  // console.log(`post product: ${JSON.stringify(product)}`);

  let formData = createProductForm(product);
  // const formData = new FormData();
  // formData.append('product[title]', product.title);
  // formData.append('product[header]', product.header);
  // formData.append('product[link]', product.link);
  // formData.append('product[description]', product.description);
  // formData.append('product[header_img]', product.header_img);
  // if (product.id) {
  //   formData.append('product[id]', product.id);
  // }

  return $.ajax({
    url: `api/products`,
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const updateProduct = (product) => {
  // console.log(`update product: ${JSON.stringify(product)}`);

  let formData = createProductForm(product);

  return $.ajax({
    url: `api/products/${product.id}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const deleteProduct = (productId) => {
  // console.log(`delete product: ${productId}`);

  return $.ajax({
    url: `api/products/${productId}`,
    method: 'DELETE'
  })
}

export const searchProduct = (keyword) => {
  return $.ajax({
    url: `api/products/search?keyword=${keyword}`,
    method: `GET`
  })
}


const createProductForm = (product) => {
  const formData = new FormData();
  formData.append('product[title]', product.title);
  formData.append('product[header]', product.header);
  formData.append('product[link]', product.link);
  formData.append('product[description]', product.description);
  formData.append('product[header_img]', product.header_img);
  if (product.id){
    formData.append('product[id]', product.id);
  }

  return formData;
}