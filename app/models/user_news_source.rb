class UserNewsSource < ApplicationRecord
  belongs_to :user 
  belongs_to :news_source 
end