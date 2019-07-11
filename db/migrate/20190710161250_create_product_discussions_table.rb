class CreateProductDiscussionsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :product_discussions do |t|
      t.integer :author_id, null: false
      t.integer :product_id, null: false
      t.integer :parent_discussion_id
      t.string :body, null: false
      t.timestamps
      t.index :author_id
      t.index :product_id
      t.index :parent_discussion_id
    end
  end
end
