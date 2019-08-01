# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  header       :string
#  description  :text
#  publisher_id :integer          not null
#  header_img   :string
#  link         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Product < ApplicationRecord

  validates :title, :header, :publisher_id, :header_img, :link, presence: true

  has_many :upvotes,
    class_name: :ProductVote

  has_many :upvoters,
    through: :upvotes,
    source: :user

  belongs_to :publisher,
    foreign_key: :publisher_id,
    class_name: :User
    
  has_many :discussions,
    foreign_key: :product_id,
    class_name: :ProductDiscussion

  # has_one_attached :header_img

  has_many :product_images,
    class_name: :ProductImage

end
