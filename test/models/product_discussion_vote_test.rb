# == Schema Information
#
# Table name: product_discussion_votes
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  discussion_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ProductDiscussionVoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
