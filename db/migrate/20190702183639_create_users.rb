class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, limit: 20
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false, limit: 100
      t.string :headline, limit: 140
      t.string :website, limit: 140
      t.string :profile_img
      t.timestamps

      t.index :username, unique: true
      t.index :session_token, unique: true

    end
  end
end
