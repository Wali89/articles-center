class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :news_sources
end