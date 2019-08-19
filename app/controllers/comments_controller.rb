class CommentsController < ApplicationController
  def index 
        if user_signed_in?
          render json: current_user.comments
        else
          render json: {}, status: 401
        end
      end
end
