# initial Setup

- npm init
- npm i express pg sequelize
- npm i dotenv

# created connection db and sequelize ORM

# created User Model with Sequelize

# created CURD controller for Users

# created Routes for Users

# creating Index.js

# dockerize :

- Create files :
  - .dockerignore
  - Dockerfile
  - docker-compose.yml

# test run

- postgres container,
- build node app
- run the container app

# run

- docker compose up -d node_db

# you can use TablePlus :

- https://tableplus.com/download
- to crosscheck postgres -> node_live_db

# lets build image based on our application

- docker compose build
- docker compose up --build

# tryout Endpoints on Postman for CRUD
