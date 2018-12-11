var express     = require("express"),
    router      = express.Router(), //modular chunks
    db          = require("../models/index.js");
    


router.get("/", function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        console.log(err);
    });
});

router.post("/", function(req, res){
    console.log(req.body);
    db.Todo.create(req.body)
    .then(function(newToDo){
        res.status(201).json(newToDo);
    })
    .catch(function(err){
        res.send(err);
    });
});

router.get("/:todoId", function(req,res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundToDo){
        res.json(foundToDo);
    })
    .catch(function(err){
        res.send(err);
    });
});


module.exports = router;