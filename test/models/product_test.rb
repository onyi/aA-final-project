# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  header       :string
#  description  :text
#  publisher_id :integer          not null
#  header_img   :string
#  link         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
