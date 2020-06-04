const {
  HealthcheckRequest,
  HealthcheckReply
} = require('./healthcheck_pb');
const {
  GreeterClient
} = require('./healthcheck_grpc_web_pb');

var greeterService = new GreeterClient('http://localhost:8094');

var request = new HealthcheckRequest();
request.setName("Maddy");


greeterService.healthCheck(request, {}, function (err, response) {
  console.log(request);
  document.getElementById("request").innerHTML = "Request: " + JSON.stringify(request);

  console.log(response);
  document.getElementById("response").innerHTML = "Response: " + JSON.stringify(response);
});
