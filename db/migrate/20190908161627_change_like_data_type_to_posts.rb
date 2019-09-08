class ChangeLikeDataTypeToPosts < ActiveRecord::Migration[5.2]
  def change
    change_column_default :posts, :like, from: nil, to: 0
  end
end
