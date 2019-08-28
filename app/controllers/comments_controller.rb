class CommentsController < ApplicationController
  def index
        if user_signed_in?
          render json: Comment.all
        else
          render json: {}, status: 401
        end
      end

  def create
    if user_signed_in?
      if comment = current_user.comments.create(comment_params)
        render json: comment, status: :created
      else
        render json: comment.errors, status: 400
      end
    else
      render json: {}, status: 401
    end
  end

  def comment_params
      params.require(:comment).permit(:story_id, :story_comment, :story_score, :user_id, :post_id)
  end
end
