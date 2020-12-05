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
  const eventsResponse = Object.fromEntries(events);
  res.send({
    data: eventsResponse,
  });
});

router.get("/words", (req, res) => {
  const wordsResponse = Object.fromEntries(words);
  res.send({
    data: wordsResponse,
  });
});

router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
