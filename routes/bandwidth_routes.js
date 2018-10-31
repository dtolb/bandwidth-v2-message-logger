const express = require("express");
let router = (module.exports = express.Router());
const bw = require("../controllers/bandwidth_controller.js");

router
  .route("/messages")
  .post(bw.validateMessage, bw.saveMessage);
