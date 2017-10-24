var express = require("express");
var app = express();
var port = process.env.PORT || 8000;
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/public/index.html");
});
app.listen(port, function() {
  console.log("server started and running on port number " + port);
});
