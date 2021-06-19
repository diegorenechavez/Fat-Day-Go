class CreateBlogPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :blog_posts do |t|
      t.integer :author_id, null:false
      t.string :title, null:false
      t.text :body
      t.text :instructions
      t.text :directions
      t.string :equipment_needed
      t.string :tips
      t.timestamps
    end
  end
end
