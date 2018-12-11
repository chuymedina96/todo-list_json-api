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

//Update route
router.put("/:todoId", function(req,res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, { new: true}) //responds with old data before it was updated, unless specified by the new word
    .then(function(updatedToDo){
        res.json(updatedToDo);
    })
    .catch(function(err){
        res.send(err);
    });
});

router.delete("/:todoId", function(req,res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(deletedToDo){
        res.json({message: "We deleted it"});
    })
    .catch(function(err){
        res.send(err);
    });
});


module.exports = router;