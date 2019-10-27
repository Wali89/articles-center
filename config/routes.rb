Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :api do

    
    get '/articles', to: 'articles#index'
    get '/topStories', to: 'articles#topStories'
    get '/channels', to: 'articles#channels'
    get '/channels/:channel', to: 'articles#channel_articles'
    post'/articles_search', to: 'articles#articles_search'
    get '/users/:id' => 'users#show'
    patch '/users/:id' => 'users#update'
    post '/users' => 'users#create'
    root :to => 'index#index'
    post 'user_token' => 'user_token#create'
    post 'invalidate_token' => 'user_token#invalidate',
    constraints: ->(request) do
  !request.xhr? && request.format.html?
    end
  end
end

  