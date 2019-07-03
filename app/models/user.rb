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

class User < ApplicationRecord


  validates :username, :email, :session_token, presence: true, uniqueness: true

  validates :password_digest, presence: true

  validates :password, length: { minimum: 6, allow_nil: true } 

  before_validation :ensure_session_token


  attr_reader :password


  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    @user && @user.is_password?(password) ? @user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end


end
