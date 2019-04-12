var express = require("express");

var router = express.Router();


// ==== Import the burger.js model to use the database function ==== //
var burger = require("../models/burger.js");

// ==== Create routes and logic ==== //
router.get("/", function(req, res){
    burger.all(function(data){
        var food = {
            burger: data
        };
        console.log(food);
        res.render("index", food);
    });
});

router.post("/api/burger", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({ id: result.insertId });    
    });
});

// router.put("/api/burger/:id", function(req, res){
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);
// });

router.delete("/api/burger/:id", function(req, res){
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