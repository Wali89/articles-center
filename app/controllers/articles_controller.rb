class ArticlesController < ApplicationController
  require 'pry'
  def topStories
    response = Faraday.get 'https://newsapi.org/v2/top-headlines?' do |req|
      req.params['apiKey'] = ENV['SECRET_KEY']
      req.params['country'] = 'us'
      req.params['pageSize'] = 100
      req.params['page'] = 1

    end
  
    @headlines = JSON.parse(response.body)
    render json: @headlines, status: 200
  end

  def channels
    response = Faraday.get 'https://newsapi.org/v2/sources?' do |req|
      req.params['apiKey'] = ENV['SECRET_KEY']
      req.params['country'] = 'us'
    end
    @channels = JSON.parse(response.body)
    render json: @channels, status: 200
  end

  def channel_articles
    response = Faraday.get 'https://newsapi.org/v2/everything?' do |req|
      req.params['apiKey'] = ENV['SECRET_KEY']
      req.params['language'] = 'en'
      req.params['pageSize'] = 100
      req.params['sources'] = params[:channel]
      
    end
    @channel_articles = JSON.parse(response.body)
    render json: @channel_articles, stats: 200
  end

  def articles_search
    
    @search = Search.create(articles_params)
    
    response = Faraday.get 'https://newsapi.org/v2/everything?' do |req|
      req.params['apiKey'] = ENV['SECRET_KEY']
      req.params['q'] = params[:articles][:query]
      req.params['sortBy'] = 'relevancy'
      req.params['language'] = 'en'
    end

    @query_articles = JSON.parse(response.body)
    render json: @query_articles, status: 200
  end

  def articles_params
    params.require(:articles).permit(:query)
  end

end