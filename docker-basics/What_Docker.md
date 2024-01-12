# Why Docker?

- You Faced Issues with after forking or cloning applications :

  - Not able to Run Application on Your machine.
  - Runs on Windows Not Mac OS.
  - Struggle with Nodejs Versions.

- So , Docker was Created in 2013.
- Its not Just a tool to solve Compatibility Issues.

- Concepts :

# What Docker is?

# Why,When and How you Should use it?

# How to make your life Easier by Docker Desktop?

# Master Docker Fundamentals.

# Advanced Concepts : Volumes, Networks , Port Mapping

# Dockerize Application : Frontend, Backend, Database

- with React,MERN,nextJS

# Docker file Syntax

# Docker Commands

- Docker compose
- init
- scout
- compose watch

# What is Docker ?

- Its a platform that enables developement,packaging and Execution of Application in unified Enviornment.

- By Clearly Specifying our App requirements :
  - such as Nodejs version
  - necessary packages tailwind
  - material ui
  - react-hook-form
  - express etc.
- Docker Generates its own Operating System and all components
  essential for running application.
- This Docker Box Container acts as seperate Computer
  Providing : Operating System , Runtimes, Everything Required
  for our Application to Run Smoothly.

# Why Use Docker?

- Using docker helps application faster and better in terms of Development and Deployment both.

# Most Common Use of Docker ?

- 1. Consistency Across Enviornments :
     - No more : Its Doesnt work on my Machine Drama.
     - Reduces Confusion.
     - Boosts Collaboration.
- 2. Isolation :
     - Neatly partition of dependencies and packages according to applications.
     - Simplifies Debugging.
     - Improves Security.
     - Smoother Development.
- 3. Portability :

  - Docker helps in managing app during all Different stages :

    - Developement
    - Testing
    - Production

  - Light weight , Shares Host system Resources.
  - More Efficient than Traditional Virtual Machines.
  - Faster Application Start time.
  - Reduced Resource usage.

- 4. Version control :

  - Helps keep track of Versions of our application.
  - More like accessiblity to previous version of our app
    in case something goes wrong with current version.

- 5. Scalability :

  - Docker Helps in making copies of our application .
  - Just in Case of More user when needed.

- 6. DevOps Integration :
  - Docker Bridges Gap between : development and operations
  - Stream lining the work from coding to deployment.
- Integration Ensures :
  Software App is Developed ,Tested , Deployed Efficiently with
  continous Collaboration and Feedback.

# How Does Docker Work?

Two Main Concepts in Docker :

- Images
- Containers

Entire Work Flow Revolves around Them.

# Docker Image : Executable Package.

- Lightweight.
- Standalone.
- Executable Package.

which includes everything needed to run piece of software application

- Docker Image is more like specifications and requirements for building our application.
- Docker Image -> Docker Container

# Docker Container : Runable Instance.

- Docker Container acts as Execution Environment for Specific App.
- Including All Specification and Requirements : i.e.

  - 1.  Code
  - 2.  Runtime
  - 3.  Libraries
  - 4.  System tools
        Even OS.

- We can Run Multiple Containers with single Image created.
- Port mapping.

# Docker Volume : Persistent Data Storage Mechanism.

- Docker Volume is Shared Storage Outside Container.
- Between Container and Host Local Computer.
- Container and Server.
- Container and Containers.

# Docker Network :

- Its Communication Channel help different Containers to connect and share information with other container or outside world.
- the versatility of Docker networks, supporting various scenarios for container communication within a host, across multiple hosts in a Swarm, and with external networks. Docker networks play a crucial role in creating scalable, isolated, and efficient containerized applications.

# Docker WorkFlow :

- Docker Client :

  - It is the UI for interacting with docker its a Tool we use to give Docker commands.
  - We issue commands to the Docker client via :
    - Command line
    - Graphical UI
  - We Pass instructions such as :
  - To build
  - To run
  - Manage images and containers

- Docker Host (Docker Daemon) :

  - Docker Daemon is Background Process responsible for Managing Containers on the Host System.
  - Its Listens for Docker Client Commands creates and manages
    containers builds images and handle other docker related tasks.

- Docker registry (Docker Hub) :

  - Docker Hub a Centralized Repository of Docker Images.
  - It Hosts both public and private Registries or Packages.
  - Docker is to dockerHub - such as - what Git is to github.

# Flow :

Docker client : ----> Docker Host --------> Docker Registry

cmds: --------------> Docker Daemon
docker build --------> images
docker pull ---------> containers
docker run

# How Does Docker Work ?

- Docker Client is Command Center - where we issue instructions.

- Docker Host then Executes this instructions and manages
  containers.

- The docker Registry serves as centralized Storage for sharing and distributing Images.
