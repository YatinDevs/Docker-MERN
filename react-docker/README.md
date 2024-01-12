# React Dockerization Demo :

- npm create vite@latest react-docker
- docker build -t react-docker .
- docker run react-docker
- docker run -p 5173:5173 react-docker (port mapping)
- docker ps
- docker container prune ( removes all stopped container)
- docker rm id --force (removes working container as well)
  created changes in script of dev vite --host
- docker run -p 5173:5173 react-docker (port mapping)
  now if any changes made to local not visible on remote container
  so
- docker stop 62fec85a6eb7
- docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules react-docker

  -v "$(pwd):/app": This flag creates a volume mount, linking the current working directory ($(pwd)) on the host to the /app directory inside the container. This is often used to share code or data between the host and the container.
  -v : stands for that we are creating a volume

here we have dockerized our frontend application

# Lets Pulish our Docker Image :

- docker login
  if we dont provide tag below it will be :latest
- docker tag react-docker-new yatindevs/react-docker-new
- docker push yatindevs/react-docker-new

# Docker Compose : Easy Way to Dockerize (React Demo)

- Writing and running all these commands for
  building images and containers and mapping them to host
  is to much to do
- we can automate this process with docker compose

Docker Compose : It is a tool that helps us to manage an application
with multi container.

- With help of .yaml file we configure :
  - Services
  - Networks
  - Volumes
    with single command

# commands :

- docker init

- inside compose.yaml
  services:
  server:
  build:
  context: .
  environment:
  NODE_ENV: production
  ports: - 5173:5173

- changing server to web for web application
- as we are not using environment variable we can remove it here.
- we need to add volumes to our web service.

services:
web:
build:
context: .
ports: - 5173:5173
volumes:

- .:/app
- /app/node_modules

- docker compose up

- So with Docker compose and premade Docker file we
  were able to dockerize the container and host application
  on certain port
- Still This isnt that Optimal for Developer Experience
- Everytime we make change to docker file we have to re-run the container.

- Docker - compose Solves the Problem of showing upto-date code changes
  through volumes letting us manage multiple containers in a single file.
  Lets us do both things building and running images but still it doesnt do it automatically when we change something related to
  package files or when we think its needed to rebuild the image.

Solution to Above problem :

# Docker Compose Watch : Next Feature (MERN Demo)

- Docker Compose watch : Listen to our changes and does something like

  - Rebuilding our App.
  - Re-running the Container.

- New Feature : Which Automatically Updates our Service Container when
  we Work.

# What Specific Things can we Do with Docker Compose Watch

- 1. Sync : -> The Sync operation moves chnaged files from our
     computer to the right places in the container making sure that
     everything stays up to date in real time.
- 2. Rebuild : -> The Rebuild process starts with creation of new
     container images and then it updates the services this is beneficial when rolling out the changes to applications in production the most recent version of the code is in operation.
- 3. Sync-Restart : -> This Operation merges the sync and rebuild processes it begins by syncing modifications from the host file system
     to the container path and then restarting the Container.

     Benificial during Development and Testing of Application.

# Dockerize MERN Application :

- FrontEnd :

  - Create a Dockerfile
  - create .dockerignore

- Backend :
  - Create a Dockerfile
  - create .dockerignore

create compose.yaml for Mern-docker folder containing :
frontend folder
backend folder
compose.yaml

- docker compose up

# Docker Compose watch :

- To show realtime changes on local machine on container
- https://github.com/docker/compose/issues/11069
- docker compose watch

- Check for frontend with changes in nav links
- Check for backend by adding package called colors

# To interact with mongo Image with MongoDB shell:

- docker exec -it 4dc9a8b626d7 /bin/bash
- ls
- mongosh

# Publish MERN :

docker login

docker-compose tag your_project_name_mongodb yourdockerhubusername/mongodb
docker-compose tag your_project_name_express yourdockerhubusername/express
docker-compose tag mern-docker yatindevs/react

docker-compose push

# Docker Scout :

- New Feature :
- When we create container images for our application
  we re essentially stacking layers of existing images and software components.
- some of this components might have security vulnerabilities making our containers and their applications susceptible to attack

Docker scout : Its proactive about security it scans
our container images looks at all layers and software pieces like building block inside them ,
returns detailed list called a SBOM (software bill of material)

SBOM -> contains everything our container is made of then Docker scout checks the list against an always
updated list of potential weak points known vulnerabilites .

- Docker Scout :

- We can use through :
- Docker Desktop
- Docker hub
- Docker CLI

# Dockerizing Next Js App :

- docker init

CREATED: .dockerignore
CREATED: Dockerfile
CREATED: compose.yaml
CREATED: README.Docker.md

- update all files according to requirements

- docker compose up

- docker compose watch

# Should You Dockerize your application :

- Its worth Considering dockerization of application be it :
- frontend
- backend
- fullstack

- If you have big and complex applications They usually have
  many moving parts like databases servers and api .
- Docker packages everything app needs into standardized unit or container making it easier to manage.
- Imagine Big Application with server database and multiple
  apis for :
  payment,
  order,
  processing and inventory management
  dockerizing each component ensures that they work together
  seamlessly and can be easily deployed or scaled as needed.

- Similarly you have application built from many small pieces or microservices which involves breaking an app into small independent features .Docker containers are perfect for isolating and managing these services seperately.

- Example : Social Media App
- Separate micro services for :

  - user Auth
  - post content
  - handle notification
  - manage connections

- dockerizing each microservices allows independent

  - development
  - testing
  - scaling
    of these services without affecting the Entire application

- SomeTimes Developement Team uses Different OS windows
  Mac Linux

  - Setting Up development Enviornment On each can lead
    to in Consistency
  - Docker Ensures Every Developer regardless of OS works
    in same containerized enviornment
    - minimizing Compatibility Issues

- Docker allows you to easily replicate and deploy additional transcoding containers Ensuring Smooth Scaling

- Updates happens Smoothly without breaking dependencies ensuring changes go live smoothly .

- Docker also Simplifies Teamwork
- Irrespective of Setup of team members
- Docker ensures everyone has necessary libraries
- dependencies
- configurations
- Everyone works in same containerized setup Reducing
  compatibility issues and making collaboration much smoother.
