class CommentSerializer < ActiveModel::Serializer
  attributes :id, :story_comment, :created_at, :story_score
  belongs_to :user
end
