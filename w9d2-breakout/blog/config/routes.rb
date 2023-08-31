Rails.application.routes.draw do


  scope module: "api" do
    resources :posts
    resources :authors
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
