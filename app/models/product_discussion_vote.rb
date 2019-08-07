class ProductDiscussionVote < ApplicationRecord

  validates :discussion_id, :user_id, presence: true

  belongs_to :discussion,
    foreign_key: :discussion_id,
    class_name: :ProductDiscussion

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User


end
