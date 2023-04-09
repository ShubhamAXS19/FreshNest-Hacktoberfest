const express = require("express");
const auth = require("../routes/auth");
const list = require("../routes/list");
const search = require("../routes/search");
const profile = require("../routes/profile");
/**
 * Function that exports all the routes
 * @param {Express} app
 */

module.exports = function (app) {
  app.use("/api/auth", auth);
  app.use("/api/list", list);
  app.use("/api/search", search);
  app.use("/api/profile", profile);
  //   app.use(error);
};
