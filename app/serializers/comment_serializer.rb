class CommentSerializer < ActiveModel::Serializer
  attributes :id, :story_id, :story_comment, :created_at, :story_score, :post_id
  belongs_to :user
  belongs_to :post
end
