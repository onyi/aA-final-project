class Api::ProductsController < ApplicationController

  def create
    # debugger
    # sleep(5)
    @product = Product.new(product_params)
    @product.publisher_id = current_user.id
    if @product.save
      render 'api/products/show'
    else
      render json: @product.errors.full_messages, status: 500
    end
  end

  def update
    @product = current_user.published_products.find_by(id: params[:product][:id]) # Only find product created by current user
    if @product.nil?
      render json: ["Cannot update other user's product post!"], status: 403
    end
    if @product.update_attributes(product_params)
      render 'api/products/show'
    else  
      render json: @product.errors.full_messages, status: 500
    end
  end

  def show
    # @product = Product.find_by_id(params[:id])
    @product = Product.includes(:product_images, :upvotes).find_by_id(params[:id])
  end

  def index
    # @products = Product.includes(:discussions, :upvotes).order(:created_at).all

    @products = Product.
      select("products.*","COUNT(pv.user_id) AS upvotes, COUNT(pd.id) AS discussion_count, products.id ").
      joins("LEFT JOIN product_votes pv ON pv.product_id = products.id").
      joins("LEFT JOIN product_discussions pd ON pd.product_id = products.id").
      group("products.id")
    if params[:search_keyword]
      @products = @products.where("title like ?", "%#{params[:search_keyword]}%")
    elsif params[:publisher_id]
      @products = @products.where("publisher_id = ?", "#{params[:publisher_id]}")

      # sleep(5) # Debug loading icon
    end
    render 'api/products/index'
  end

  def destroy
    @product = current_user.published_products.find_by(id: params[:id])
    if @product
      @product.destroy
      if !@product.errors.empty?
        render json: @product.errors.full_messages, status: 500
      else
        render 'api/products/show'
      end
    else
      render json: ["Cannot delete product post published by other user!"], status: 403
    end

  end

  private 

  def product_params
    params.require(:product).permit(:title, :header, :header_img, :link, :description, :photo)
  end


end
