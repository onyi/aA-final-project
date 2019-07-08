class Api::ProductsController < ApplicationController

  def create
    @product = Product.new(product_params)
    if @product.save
      render 'api/products/show'
    else
      render json: @product.errors.full_messages, status: 500

    end
  end

  def update
    @product = current_user.products.find_by(:id, params[id]) # Only find product created by current user
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
    @product = Product.find_by_id(params[:id])
  end

  def index
    if params[:search_keyword]
      @products = Product.where("title like ?", "%#{params[:search_keyword]}%")
    else
      @products = Product.all
      # sleep(5) # Debug loading icon
    end
    render 'api/products/index'
  end

  private 

  def product_params
    params.require(:product).permit(:title, :header, :header_img, :link, :publisher_id, :description)
  end


end
