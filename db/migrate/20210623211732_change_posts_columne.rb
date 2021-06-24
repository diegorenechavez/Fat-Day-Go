class ChangePostsColumne < ActiveRecord::Migration[5.2]
  def change
    rename_column :blog_posts, :type, :food_type
  end
end
