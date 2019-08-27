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
        binding.pry
        if user_signed_in?

          render json: Post.find(params[:id])
        else
          render json: {}, status: 401
        end
      end

      def create
        if user_signed_in?
  # binding.pry
          if post = current_user.posts.create(post_params)
            render json: post, status: :created
          else
            render json: post.errors, status: 400
          end
        else
          render json: {}, status: 401
        end
      end

      def post_params
        params.require(:post).permit(:title, :content)
      end

    end
  end
end
