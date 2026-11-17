# 1.1 Commands

# Create Kubernetes cluster and set context

1. `k3d cluster create -a 2`
2. `kubectl config use-context k3d-k3s-default`

to stop and start run `k3d cluster <stop/start>` or to delete `k3d cluster delete`

## Build image

`docker build -t log-output .`

## Push to Hub

1. `docker login`
2. `docker tag log-output einsteinium1/log-output`
3. `docker push einsteinium1/log-output`

## Create deployments

`kubectl create deployment logger-dep --image=einsteinium1/log-output`

## Check logs

1. `kubectl get pods`
2. `kubectl logs -f <pod>`

# 1.3 Declarative approach

First I checked that the old deployment does not exist:

`kubectl get deployments`

And then apply the deployment:

`kubectl apply -f manifests/deployment.yaml`

Checked that the logger still works using commands under "Check logs".
