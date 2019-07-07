class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.string :header
      t.text :description
      t.integer :publisher_id, null: false
      t.string :header_img
      t.string :link, null: false
      t.timestamps
      t.index :publisher_id
    end
  end
end
