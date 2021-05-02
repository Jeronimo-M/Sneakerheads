class LikesController < ApplicationController
  before_action :set_like, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:likePost, :destroy]

  # GET /likes
  def index
    @likes = Like.all

    render json: @likes
  end

  # GET /likes/1
  def show
    render json: @like
  end

  # POST /likes
  

  def likePost
    @like = Like.new(like_params)
    @like.user = @current_user
    @like.post = Post.find(params[:post_id])

    if @like.save
      render json: @like, status: :created, location: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  
  

  # DELETE /likes/1
  def destroy
    @like.destroy
  end

  private
    
    # Only allow a list of trusted parameters through.
    def like_params
      params.permit(:user_id, :post_id)
    end
end
