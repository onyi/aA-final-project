Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root' # Route root connection to React frontend

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show, :index]
    resources :products, only: [:index, :show, :update, :create] do
      resources :discussions, as: :discussions, controller: "product_discussions", only: [:create, :destroy, :index, :show] do
        resources :replies, as: :replies, controller: "product_discussions", only: [:create]
      end
    end
    resources :product_votes, only: [:create, :destroy]
  end


end
