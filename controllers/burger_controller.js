var express = require("express");

var router = express.Router();


// ==== Import the burger.js model to use the database function ==== //
var burger = require("../models/burger.js");

// ==== Create routes and logic ==== //
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "name", "devoured"
    ],[
        req.body.name, req.body.devoured
    ], function(result){
        //res.json({ id: result.insertId });  
        res.redirect("/");  
    });
});

router.post("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition" + condition);
    console.log("go horns")

    burger.update(
        {
            devoured: true
        },
        condition, function(result){
            res.redirect("/")
        });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;