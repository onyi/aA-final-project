class ProductImage < ApplicationRecord

  validates :product_img, :product_id, presence: true

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product

  


end
