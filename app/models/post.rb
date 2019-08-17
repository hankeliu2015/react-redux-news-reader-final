class Post < ApplicationRecord
  belongs_to :user
  validate :title, :content, presence: true

end
