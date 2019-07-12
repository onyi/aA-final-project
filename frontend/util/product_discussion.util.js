export const postDiscussion = (discussion) => {
  return $.ajax({
      url: `/api/products/${discussion.productId}/discussions`,
      method: 'POST',
      data: { 
        body: discussion.body,
        product_id: discussion.productId
       }
    });
};

export const deleteDiscussion = (discussion) => {
  return $.ajax({
    url: `/api/products/${discussion.productId}/discussions/${discussion.id}`,
    method: 'DELETE'
  })
}

export const getDiscussion = (productId, discussionId) => {
  return $.ajax({
    url: `/api/products/${productId}/discussions/${discussionId}`,
    method: 'GET'
  });
};

export const getDiscussions = (productId) => {
  return $.ajax({
    url: `/api/products/${productId}/discussions`,
    method: 'GET'
  });
};