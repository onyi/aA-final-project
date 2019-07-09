class ProductVote < ApplicationRecord
  validates :product_id, :user_id, presence: true

  attr_reader :is_upvoted

  belongs_to :product,
    class_name: :Product

  belongs_to :user
  

  def is_upvoted=(bool)
    @is_upvoted = bool
  end


end
