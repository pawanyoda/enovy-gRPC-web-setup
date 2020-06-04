# local setup gRPC  with docker-compose 

#### Build gRPC Web Client, Envoy and Server
```sh
cd grpc-web-demo
#run this command to build gprc-web project
docker-compose up --build -d
# this will create three doocker containers(grpc-client, grpc-envoy, grpc-server) like:
"grpc-web-demo_envoy_1         /docker-entrypoint.sh /bin ...   Up      10000/tcp, 0.0.0.0:8094->8094/tcp, 0.0.0.0:9900->9900/tcp
grpc-web-demo_grpc-client_1   docker-entrypoint.sh /bin/ ...   Up      0.0.0.0:8001->8001/tcp                                   
grpc-web-demo_grpc-server_1   python healthcheck_server. ...   Up      50051/tcp  "

#open the browser and hit the url: http://localhost:8001 and you will get output from server like:
"Request: {"wrappers_":null,"arrayIndexOffset_":-1,"array":["Maddy"],"pivot_":1.7976931348623157e+308,"convertedPrimitiveFields_":{}}

Response: {"wrappers_":null,"arrayIndexOffset_":-1,"array":["Server Healthcheck is Ok, Maddy!"],"pivot_":1.7976931348623157e+308,"convertedPrimitiveFields_":{}}"

#For remove :
$ docker-compose down

```