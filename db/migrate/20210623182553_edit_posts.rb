class EditPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :blog_posts, :description, :string
    add_column :blog_posts, :cuisine, :string
    add_column :blog_posts, :type, :string
  end
end
