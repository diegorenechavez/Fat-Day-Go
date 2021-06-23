class BlogPost < ApplicationRecord
    validates :author_id, presence:true
    validates :title, presence:true, length: { minimum: 3}


    belongs_to :user,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User
end
