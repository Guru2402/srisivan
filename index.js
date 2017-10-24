var express = require("express");
var app = express();
var port = process.env.PORT || 8000;
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser"),
  email = "devsrisivan@gmail.com",
  pass = "devsrisivan1";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/public/index.html");
});
app.post("/mail", (req, res) => {
  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: email,
      pass: pass,
    },
  });
  // var smtpTransport = nodemailer.createTransport(
  //   "smtps://prasadguru141@gmail.com:" +
  //     encodeURIComponent("qwertyasdfzx") +
  //     "@smtp.gmail.com:465"
  // );

  console.log(req.body);
  var data = {
    from: email,
    to: email,
    subject: "From website",
    text: req.body.message,
  };

  console.log(data);
  smtpTransport.sendMail(data, function(err) {
    console.log("smrp");
    if (err) {
      console.log(err);
      res.send("SMTP error" + err);
    } else {
      console.log(data);
      res.redirect("/");
    }
  });
});
app.listen(port, function() {
  console.log("server started and running on port number " + port);
});
