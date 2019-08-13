class Api::ProductDiscussionVotesController < ApplicationController

  def create
    @product_discussion_vote = ProductDiscussionVote.new({
      discussion_id: params[:id], 
      user_id: current_user.id
    })
    if @product_discussion_vote.save
      @product_discussion_vote.is_upvoted = true
      render 'api/product_discussion_votes/show'
    else
      render json: @product_discussion_vote.errors.full_messages, status: 500
    end
  end

  def destroy
    @product_discussion_vote = ProductDiscussionVote.find_by(discussion_id: params[:id], user_id: current_user.id)
    if @product_discussion_vote
      @product_discussion_vote.destroy
      if !@product_discussion_vote.errors.empty?
        render json: @product_discussion_vote.errors.full_messages
      else
        @product_discussion_vote.is_upvoted = false
        render 'api/product_discussion_votes/show'
      end
    else
      render json: ["Cannot delete discussion vote"], status: 500
    end

  end


end
