json.merge! discussion.attributes
json.set! "author" do 
  json.merge! discussion.author.attributes.except("session_token", "password_digest", "created_at", "updated_at")
end
json.discussionReplies discussion.discussion_replies do |reply|
  # json.merge! reply.attributes
  # json.set! "author" do 
  #   json.merge! discussion.author.attributes.except("session_token", "password_digest", "created_at", "updated_at")
  # end
  json.partial! '/api/product_discussions/discussion', discussion: reply, current_user: current_user
end

