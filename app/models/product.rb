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
    

end
