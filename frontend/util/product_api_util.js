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


export const postUpvote = (id) => {
  $.ajax({
    url: `api/products/upvote`,
    method: "POST",
    data: { id } 
  })
}

export const deleteUpvote = (id) => {
  $.ajax({
    url: `api/products/upvote`,
    method: "DELETE",
    data: { id } 
  })
}


