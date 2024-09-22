# Docker commands

1. `docker ps` - gives all the running containers
2. `docker images` - list all the images
3. `docker build . --tag <ImageName>` - build the docker file in the folder - context
4. `docker run <ImageName>` - run the container according the requested image
5. `docker exec -it <ContainerId> bash` - get into the container
6. `docker run -p <hostPort>:<dockerPort> <ContainerName>`