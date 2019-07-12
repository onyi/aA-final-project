json.merge! discussion.attributes
json.set! "author" do 
  json.merge! discussion.author.attributes.except("session_token", "password_digest", "created_at", "updated_at")
end
json.discussionReplies discussion.discussion_replies

