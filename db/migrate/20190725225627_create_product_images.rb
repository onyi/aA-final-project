class CreateProductImages < ActiveRecord::Migration[5.2]
  def change
    create_table :product_images do |t|
      t.integer :product_id, null: false
      t.string :product_img, null: false
      t.timestamps
      t.index :product_id
    end
  end
end
