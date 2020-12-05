const express = require("express");
const { words, events } = require("./CounterService");
const router = express.Router();

const { stopProcess } = require("./ProcessService");

router.get("/", (req, res) => {
  res.send("The Process started");
});

router.get("/stop", (req, res) => {
  stopProcess();
  res.send("The Process stoped");
});

router.get("/events", (req, res) => {
  const eventsToSend = Object.fromEntries(events);
  res.send({
    data: eventsToSend,
  });
});

router.get("/words", (req, res) => {
  const wordsToSend = Object.fromEntries(words);
  res.send({
    data: wordsToSend,
  });
});

router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
