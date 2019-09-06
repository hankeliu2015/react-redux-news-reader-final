module Api
  module V1
    class PostsController < ApplicationController

      def index
        if user_signed_in?
          render json: Post.all
        else
          render json: {}, status: 401
        end
      end

      def show
        if user_signed_in?

          render json: Post.find(params[:id])
        else
          render json: {}, status: 401
        end
      end

      def create
        if user_signed_in?

          if post = current_user.posts.create(post_params)
            render json: post, status: :created
          else
            render json: post.errors, status: 400
          end
        else
          render json: {}, status: 401
        end
      end

      def update
        if user_signed_in?
          @post = Post.find(params[:id])
          updated_like = @post.like + 1
          @post.update(like: updated_like)
          render json: Post.find(params[:id])
        else
          render json: {}, status: 401
        end
      end

      def post_params
        params.require(:post).permit(:title, :content, :like)
      end

    end
  end
end
