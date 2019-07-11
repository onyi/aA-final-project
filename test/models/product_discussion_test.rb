# == Schema Information
#
# Table name: product_discussions
#
#  id                   :bigint           not null, primary key
#  author_id            :integer          not null
#  product_id           :integer          not null
#  parent_discussion_id :integer
#  body                 :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

require 'test_helper'

class ProductDiscussionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
