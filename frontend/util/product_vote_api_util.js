export const postUpvote = (id) => {
  return $.ajax({
    url: `api/product_votes`,
    method: "POST",
    data: { id }
  })
}

export const deleteUpvote = (id) => {
  return $.ajax({
    url: `api/product_votes/${id}`,
    method: "DELETE"
  })
}

