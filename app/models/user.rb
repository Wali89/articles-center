class User < ApplicationRecord
  has_secure_password

  has_many :user_news_sources
  has_many :news_sources, through: :user_news_sources
  
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, on: :create

  before_save { |user| user.email = user.email.downcase }    
end