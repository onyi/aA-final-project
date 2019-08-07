json.merge! @product_discussion_vote.attributes
json.isUpvoted @product_discussion_vote.is_upvoted
json.upvotes @product_discussion_vote.discussion.upvotes.count