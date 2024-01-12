# Using Docker Image from Docker Registry :

- docker pull ubuntu
- docker run -it ubuntu
  - -it --> interactive terminal
  - gives a Linux operating system based on free software which
    we can use in terminal interactively.

# How do we create our own Docker Images:

- Lets start with docker app with hello world
- create Dockerfile and hello.js
- BaseImage - nodejs
- Working directory - for further instructions
- Copy from to destination both path
- execute Cmd

- build image :

  - docker build -t hello-docker .

- checkout images :

  - docker images

- run image in container :
  - docker run hello-docker

# Post :

🚀 While Brushing Up Docker Concept : I Followed

📌 Dive into the world of Docker with this comprehensive guide! 🐳 Explore the essential concepts, commands, and benefits of Docker, from creating your own Docker images to Dockerizing a complete MERN stack application. 🛠️

# Some Commands : Most used keywords for creating a docker file.

> FROM : Specifies the base image to use for the new Image.

> WORKDIR : WORKDIR sets the working directory for the following instructions.

> COPY : Copy copies the files or directories from the build context to image.

> RUN : Run executes commands in the shell during image build.

> EXPOSE : Expose informs the docker that container will listen on specified network ports at runtime.

> ENV : sets Enviornment Variables during the build process.

> ARG : Built time Variables.

> VOLUME : volume creates a mount point for externally mounted volumes essentially specifying a location inside your container where you can connect external storage.

> CMD : provides Default command to execute when the container starts.

> ENTRYPOINT : specifies the default executable to be run when the container starts its like having a default dish on your menu.

- CMD vs ENTRYPOINT :

- CMD - flexible , can be overridden, Default executable.

- ENTRYPOINT - cannot be overridden, Fixed starting point.

🔗 References:

Official Docker Documentation

https://docs.docker.com/

Some References of JS Mastery Youtube :

https://resource.jsmastery.pro/docker-guide

Feel free to explore the slides, learn at your own pace, and empower your skills with Docker! 🚢💻 #Docker #DevOps #Containerization #TechEducation #LearnWithMe
