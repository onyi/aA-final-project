# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string(20)       not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string(100)      not null
#  headline        :string(140)
#  website         :string(140)
#  profile_img     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
