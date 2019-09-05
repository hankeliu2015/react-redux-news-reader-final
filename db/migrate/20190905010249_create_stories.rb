class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :story_id
      t.integer :likes

      t.timestamps
    end
  end
end
