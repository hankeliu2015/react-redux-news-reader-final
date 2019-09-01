# README
News Reader App
  Render near live news from Hacker News APIs.
  User can add comments and post stories.
  Devise sign up and Login.

* Environment
  Ruby 2.6.2
  Rails 5.2.3
  Node Version: 12.8.0
  npm: 6.10.3
  OS: Mac OS 10.13.5
  Editor: Atom 1.35.1

* Set up Webpacker
  gem 'webpacker'
  rails webpacker:install
  rails webpacker:install:react

* Deployment instructions
  git clone https://github.com/hankeliu2015/react-redux-news-reader-final
  cd react-redux-news-reader-final
  bundle install
  npm install
  rails db:migrate
  rails s
  open a new terminal: ./bin/webpack-dev-server

* Database creation
* Database initialization
