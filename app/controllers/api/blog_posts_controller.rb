class Api::BlogPostsController < ApplicationController

    def index
        @posts = BlogPost.all
    end 

    def show
        @post= BlogPost.find(params[:id])
        render :show
    end 

    def update
      @post = BlogPost.find_by(id: params[:id])
      if current_user.cook == true
        if @post.update(post_params)
            render :show
        else
        render json: @post.errors.full_messages, status: 422
        end 
      end 
    end



    def create 
        @post = BlogPost.new(post_params)
        @post.author_id = current_user.id
        if current_user.cook == true
            if @post.save
                render :show
            else 
                render json: @post.errors.full_messages, status: 422
            end 
        end 
    end 

    def destroy
      @post= BlogPost.find(params[:id])
      if current_user.id == @post.author_id && @post.destroy 
          render json: @post.id
      else
        render json: @post.errors.full_messages, status: 422
      end
    end

  private

  def post_params
    params.require(:blog_post).permit(:title,:body,:ingredients,:equipment_needed,:tips, :directions, :description, :cuisine, :food_type)
  end
end
