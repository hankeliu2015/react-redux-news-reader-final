class LikesController < ApplicationController
  def index
        if user_signed_in?
          render json: Like.all
        else
          render json: {}, status: 401
        end
      end

  def create
    if user_signed_in?
      if like = Like.create(like_params)
        render json: like, status: :created
      else
        render json: like.errors, status: 400
      end
    else
      render json: {}, status: 401
    end
  end

  def like_params
      params.require(:like).permit(:item_id, :vote)
  end
end
