# == Schema Information
#
# Table name: product_discussion_votes
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  discussion_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class ProductDiscussionVote < ApplicationRecord

  validates :discussion_id, :user_id, presence: true

  attr_reader :is_upvoted

  belongs_to :discussion,
    foreign_key: :discussion_id,
    class_name: :ProductDiscussion

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  def is_upvoted=(bool)
    @is_upvoted = bool
  end

end
