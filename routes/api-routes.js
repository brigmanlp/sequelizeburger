// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our burger models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the burgers and preloaded submits

    app.get("/api", function(req, res) {
        db.burgers.findAll({}).then(function(data) {
            res.json(data);
        });
    });
    
    app.put("/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        console.log("before");
        db.burgers.update({ eaten: req.body.eaten }, { where: { uuid: req.params.id } }, function() {});
        res.redirect("/");
    });
   
    app.delete("/:id", function(req, res) {
        db.burgers.destroy({ where: { uuid: req.params.id } }, function() {});
        res.redirect("/");
    });

    app.post("/newburger", function(req, res) {
        db.burgers.create({
            name: req.body.name,
        }).then(function(dbburgers) {
            res.json(dbburgers);
        });
    });
};