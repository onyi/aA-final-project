class AddIndexToProductDiscussionVote < ActiveRecord::Migration[5.2]
  def change

    add_index(:product_discussion_votes, [:discussion_id, :user_id], unique: true)

  end
end
