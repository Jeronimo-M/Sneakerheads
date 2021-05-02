Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/user-posts', to: 'posts#user_index'

  # get '/users/:user_id/posts/:id', to: 'users#show_all_posts'
  get '/likes/:post_id', to: 'likes#likePost'
  
  resources :comments
  resources :likes, only: :destroy
  resources :posts
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
