class CreateProductDiscussionVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :product_discussion_votes do |t|
      t.integer :user_id, null: false
      t.integer :discussion_id, null: false
      t.timestamps
      t.index :user_id
      t.index :discussion_id
    end
  end
end
