class Api::ProductImagesController < ApplicationController

  def create
    @product_image = ProductImage.new(product_id: params[:product_id], product_img: params[:product_img])
    if @product_image.save

    else
      render json: @product_image.errors.full_messages, status: 500
    end
  end

  def destroy
    @product_image = ProductImage.find_by(id: params[:id])
    if @product_image
      @product_image.destroy
    else                                                                                                                                                                                          
      render json: ["Product Image not found!"], status: 500

    end
  end


end
