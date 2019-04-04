class UsersController < ApplicationController
  before_action :authenticate_user, except: [:create]
  before_action :get_user, except: [:create]

  def show
      if current_user?
          render json: @user, status: 200            
      else
          render json: {message: "Invalid Request"}, status: 401
      end
  end

  def create
      @user = User.create(user_params)
      @user.news_sources << NewsSource.find_or_create_by(name: "CNN");        
      if @user.valid? then 
          render json: @user, status: 200
      else
          render json: {message: @user.errors.full_messages}, status: 400
      end
  end 

  def update
      if ! current_user?
          render json: {message: "Invalid Request"}, status: 401
      else
          @user.news_sources.delete_all       
          params[:newsSources].each do | source | 
              s = NewsSource.find_or_create_by(news_source_id: source["news_source_id"]);
              @user.news_sources << s;
          end
          render json: @user, status: 200
      end
  end 
  
  private

  def get_user
      @user = User.find_by(:id => params[:id])
  end

  def current_user? 
      @user.id == current_user.id
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
  
end