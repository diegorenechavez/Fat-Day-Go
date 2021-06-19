class EditUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users,:username
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :address_id, :integer
  end
end
