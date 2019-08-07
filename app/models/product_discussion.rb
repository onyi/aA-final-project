# == Schema Information
#
# Table name: product_discussions
#
#  id                   :bigint           not null, primary key
#  author_id            :integer          not null
#  product_id           :integer          not null
#  parent_discussion_id :integer
#  body                 :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class ProductDiscussion < ApplicationRecord

  validates :author_id, :product_id, :body, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :product,
    class_name: :Product
    
  belongs_to :parent_discussion,
    foreign_key: :parent_discussion_id,
    class_name: :ProductDiscussion,
    optional: true
    
  has_many :discussion_replies,
    primary_key: :id,
    foreign_key: :parent_discussion_id,
    class_name: :ProductDiscussion

  has_many :upvotes,
    foreign_key: :discussion_id,
    class_name: :ProductDiscussionVote
    

end
