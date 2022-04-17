#!/bin/bash

echo "running the app"
docker-compose up -d
echo "Connecting to the database....Please wait."
sleep 10
echo "The app is available at http://localhost:3000"