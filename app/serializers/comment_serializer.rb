class CommentSerializer < ActiveModel::Serializer
  attributes :id, :story_comment, :created_at, :story_score
end
