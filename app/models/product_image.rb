# == Schema Information
#
# Table name: product_images
#
#  id          :bigint           not null, primary key
#  product_id  :integer          not null
#  product_img :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ProductImage < ApplicationRecord

  validates :product_img, :product_id, presence: true

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product

  


end
