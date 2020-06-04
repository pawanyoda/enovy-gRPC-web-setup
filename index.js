var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8001, () => {
    console.log("gRPC Web Demo Client started, http://localhost:8001");
});
