@product_discussions.each do |discussion|
  json.set! discussion.id do 
    json.partial! '/api/product_discussions/discussion', discussion: discussion, current_user: current_user
  end
end