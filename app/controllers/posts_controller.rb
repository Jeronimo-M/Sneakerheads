class PostsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy, :user_index]
  
  before_action :set_post, only: [:update, :destroy, :show]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    # @likes = Like.where(post_id: @post.id)
    # @likeCount = @likes.count
    # @post.likes.count
    # render json: @post, include: @post.likes.count
    render status:200, json: {
      post: @post, 
      likes: @post.likes.count
    }
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  # New User Index Route
  def user_index
    
    render json: @current_user.posts
  end
    
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :content, :photo_url, :price, :contact_info)
    end
end
