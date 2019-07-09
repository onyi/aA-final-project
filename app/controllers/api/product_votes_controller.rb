class Api::ProductVotesController < ApplicationController

  before_action :require_logged_in

  def create
    sleep(2)
    @product_vote = ProductVote.new({
      product_id: params[:id].to_i,
      user_id: current_user.id
    })
    if @product_vote.save
      @product_vote.is_upvoted = true
      render 'api/product_votes/show'
    else
      render json: @product_vote.errors.full_messages, status: 500
    end
  end

  def destroy
    sleep(2)
    @product_vote = ProductVote.find_by(
      user_id: current_user.id, 
      product_id: params[:id].to_i)
    if @product_vote
      @product_vote.destroy
      if !@product_vote.errors.empty?
        render json: @product_vote.errors.full_messages, status: 500
      else
        @product_vote.is_upvoted = false
        render 'api/product_votes/show'
      end
    else
      render json: ["Product Vote does not exists!"], status: 500
    end
    
  end


end
