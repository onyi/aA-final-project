export const postDiscussionVote = (discussionId) => {
  return $.ajax({
    url: '/api/discussion_upvotes',
    data: {
      id: discussionId
    },
    method: 'POST'
  })
}

export const deleteDiscussionVote = (discussionId) => {
  return $.ajax({
    url: `/api/discussion_upvotes/${discussionId}`,
    method: 'DELETE'
  })
}