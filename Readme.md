# Overview of the APP

This is a product management application for admin. Here you can upload, edit, delete products. Probably a front-end will show these products to the user if future. 

*Edit functionality is not implemented at this moment*

![homepage](images/product-manager-homepage.png?raw=true "System Architecture")

# Requirements

The basic system requirements are as follows

- Any OS, preferably Linux
- Docker
- Docker compose

# Architecture

![System design diagram](images/product-manager.jpg?raw=true "System Architecture")

### Technology used

- Django (Backend Rest API)
- React (Frontend)
- Postgres - as persistent database

# Docker environment

For shipping and deploying the application docker-compose is used. All the configurations are in the docker-compose.yml file.

Key points of the docker-compose.yml is given below.

## services

- **backend:** runs the Django web API.
- **db** runs the postgres database required for the backend API
- **web** this is the service for front-end application

## Virtual networks

One virtual network is used

- main

## Volumes
For persisting the data of the db container docker volume bind is used.
- pg-data

## list of the containers

### product-manager-backend

This container runs under the service name backend. The dockerfile user for this container is located at `product-manager-backend/Dockerfile`. This container is based on python:3.9 image.

### product-manager-frontend

The frontend container for the application. The dockerfile is located at `product-manager-frontend/.docker/dev/Dockerfile`. Base image used to build this container is `Node:14`.

### db container

The container is built using the official `postgres:latest` image pulled from dockerhub.

## Preparation

To prepare the environment for the first time run the following command

```
docker-compose build
```

## Running

Run the app background

```
docker-compose up -d
```

see the logs of backend

```
docker-compose logs -f backend
```

see the logs of forntend

```
docker-compose logs -f web
```

see the logs of mysql

```
docker-compose logs -f db
```

## Stopping and removing

```
docker-compose down
```

# Viewing the app

After running the app. visit [http://localhost:3000](http://localhost:3000) to view the app
