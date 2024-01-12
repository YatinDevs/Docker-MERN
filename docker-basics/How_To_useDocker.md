# How to use Docker?

- Docker Registry (Docker hub) :
  - You can see all the public Images created so far by
    developers worldwide From official images by verified
    publishers to sponsored Open-Source ones covering
    Everything from :
    - Operating System images like Ubuntu
    - Languages like : python and golang
    - Databases Like : postgres and mongo , mysql

# How do we create our own Docker images ?

- Creating Docker images starts with special file called docker file.
- Docker file - Its a set of Instruction telling docker
  how to build an image for your application.

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
