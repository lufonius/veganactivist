#!/bin/bash

rm -rf dist
npm run build
docker build --no-cache -t registry.digitalocean.com/aign/veganactivist:latest .
docker push registry.digitalocean.com/aign/veganactivist:latest

helm upgrade veganactivist-frontend ./infrastructure/veganactivist-frontend -n test --install --wait

kubectl scale deployment veganactivist-frontend --replicas=0
kubectl scale deployment veganactivist-frontend --replicas=1
kubectl get pods --watch
