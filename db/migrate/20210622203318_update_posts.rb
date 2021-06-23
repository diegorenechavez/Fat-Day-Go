class UpdatePosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :blog_posts, :instructions, :string
    add_column :blog_posts, :ingredients, :string
  end
end
