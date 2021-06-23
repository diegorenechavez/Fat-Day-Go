class User < ApplicationRecord
  attr_reader :password

  validates :session_token, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  after_initialize :ensure_session_token

  has_many :blog_posts,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :BlogPost

  def self.create_from_omniauth(auth)
    where(email:auth.info.email).first_or_initialze do |user|
      user.uid = auth.uid
      user.name = auth.info.name
      user.email = auth.info.email
      user.image_url = auth.info.image
    end 
  end 
  

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?

    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
