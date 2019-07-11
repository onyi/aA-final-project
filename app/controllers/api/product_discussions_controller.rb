class Api::ProductDiscussionsController < ApplicationController

  def create
    @product_discussion = ProductDiscussion.new(
      parent_discussion_id: (params[:discussion_id] ? params[:discussion_id] : nil),
      body: params[:body],
      author_id: current_user.id,
      product_id: params[:product_id]  
    )
    if @product_discussion.save
      render 'api/product_discussions/show'
    else

    end
  end

  def destroy
    @product_discussion = current_user.discussions.find_by_id(params[:id])
    if @product_discussion
      @product_discussion.destroy
      render 'api/product_discussions/show'
    end
  end


  def show
    @product_discussion = ProductDiscussion.find_by_id(params[:id])
  end

  def index
    @product_discussions = ProductDiscussion.where("product_id = #{params[:product_id]}").where("parent_discussion_id IS NULL")
  end

end
