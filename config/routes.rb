Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :api do
    
    resources :articles
    get '/articles', to: 'articles#index'
    get '/topStories', to: 'articles#topStories'
    get '/channels', to: 'articles#channels'
    get '/channels/:channel', to: 'articles#channel_articles'
    post'/articles_search', to: 'articles#articles_search'
    get '/searches', to: 'search#last_ten'
    post '/searches/:id', to: 'search#update'
    
  end
end

  