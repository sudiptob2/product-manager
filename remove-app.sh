#!/bin/bash

echo "Removing the app.."
echo "Removing the product-manager-backend"
docker stop product-manager-backend && docker rm -f product-manager-backend
echo "removing the product-manager-frontend container"
docker stop product-manager-frontend && docker rm -f product-manager-frontend
echo "removing the  product-manager-db container"
docker stop  product-manager-db && docker rm -f  product-manager-db

echo "App removed."
