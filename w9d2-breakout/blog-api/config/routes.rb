Rails.application.routes.draw do

  scope "api" do
    namespace "v1" do
      resources :posts
      resources :authors
    end
    namespace "v2" do
      resources :posts
      resources :authors
    end
  end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
