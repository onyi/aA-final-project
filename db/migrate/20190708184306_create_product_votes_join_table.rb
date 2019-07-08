class CreateProductVotesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_table :product_votes do |t|
      t.integer :product_id, null: false
      t.integer :user_id, null: false
      t.index [:product_id, :user_id], unique: true
      t.index :product_id
      t.index :user_id
    end
  end
end
