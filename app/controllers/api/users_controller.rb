class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: { error: @user.error.full_messages }
    end
  end

  def update
    @user = User.find_by_session_token(session[:session_token])
    if @user
      @user.update_attributes(user_params)
      render :show
    else
      render json: { error: @user.errors.full_messages }
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    
  end
  
  def index # Search by username
    # debugger
    @users = User.where("username like ?", "%#{params[:username]}%")
  end



  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :website, :headline, :profile_img)
  end


end
