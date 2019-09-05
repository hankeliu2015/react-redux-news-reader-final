class StoriesController < ApplicationController
  def index
        if user_signed_in?
          render json: Story.all
        else
          render json: {}, status: 401
        end
      end

  def create
    if user_signed_in?
      if story = Story.create(story_params)
        render json: story, status: :created
      else
        render json: story.errors, status: 400
      end
    else
      render json: {}, status: 401
    end
  end

  def story_params
      params.require(:story).permit(:story_id, :likes)
  end
end
