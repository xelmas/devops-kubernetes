# Todo app server

The server is a simple express app that is implemented by following the [Fullstack part 3 material](https://fullstackopen.com/osa3/node_js_ja_express#yksinkertainen-web-palvelin).

The server can be started by commands:

- using default port 3001: `npm start`
- using speficied port: `PORT=<port_number> node index.js`

# Create Kubernetes cluster and set context

First I removed the old cluster with command `k3d cluster delete`.

1. `k3d cluster create -a 2`
2. `kubectl config use-context k3d-k3s-default`

to stop and start run `k3d cluster <stop/start>`.

## Build image

`docker build -t todo-app-server:v1 .`

I tested that the image works and prints (Server started in port NNNN) locally using commands:

- `docker run --rm -e PORT=4000 -p 4000:4000 todo-app-server:v1`
- `docker run --rm -p 3001:3001 todo-app-server:v1`

## Push to Hub

1. `docker login`
2. `docker tag todo-app-server:v1 einsteinium1/todo-app:v1`
3. `docker push einsteinium1/todo-app:v1`

## Create deployments

`kubectl create deployment todo-app-dep --image=einsteinium1/todo-app:v1`

## Check logs

1. `kubectl get pods`
2. `kubectl logs -f <pod>`

Logs printed "Server started in port 3001".
