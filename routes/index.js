let messages = [
  { text: "Hello, how are you doing", user: "Dylan", added: new Date() },
  { text: "I am doing fine, thank-you", user: "Grigory", added: new Date() },
  { text: "I am ill.", user: "Dunechka", added: new Date() },
];

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const [messageText, username] = req.body;
  messages.push({
    text: messageText,
    user: username,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
