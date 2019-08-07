# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_07_221200) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "product_discussion_votes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "discussion_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discussion_id", "user_id"], name: "index_product_discussion_votes_on_discussion_id_and_user_id", unique: true
    t.index ["discussion_id"], name: "index_product_discussion_votes_on_discussion_id"
    t.index ["user_id"], name: "index_product_discussion_votes_on_user_id"
  end

  create_table "product_discussions", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "product_id", null: false
    t.integer "parent_discussion_id"
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_product_discussions_on_author_id"
    t.index ["parent_discussion_id"], name: "index_product_discussions_on_parent_discussion_id"
    t.index ["product_id"], name: "index_product_discussions_on_product_id"
  end

  create_table "product_images", force: :cascade do |t|
    t.integer "product_id", null: false
    t.string "product_img", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_product_images_on_product_id"
  end

  create_table "product_votes", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "user_id", null: false
    t.index ["product_id", "user_id"], name: "index_product_votes_on_product_id_and_user_id", unique: true
    t.index ["product_id"], name: "index_product_votes_on_product_id"
    t.index ["user_id"], name: "index_product_votes_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "title", null: false
    t.string "header"
    t.text "description"
    t.integer "publisher_id", null: false
    t.string "header_img"
    t.string "link", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["publisher_id"], name: "index_products_on_publisher_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", limit: 20, null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", limit: 100, null: false
    t.string "headline", limit: 140
    t.string "website", limit: 140
    t.string "profile_img"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
