var db = require("../models/index.js");

exports.getToDos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        console.log(err);
    });
};

exports.newTodos = function(req, res){
    console.log(req.body);
    db.Todo.create(req.body)
    .then(function(newToDo){
        res.status(201).json(newToDo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updatedTodos = function(req,res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, { new: true}) //responds with old data before it was updated, unless specified by the new word
    .then(function(updatedToDo){
        res.json(updatedToDo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deleteTodos = function(req,res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(deletedToDo){
        res.json({message: "We deleted it"});
    })
    .catch(function(err){
        res.send(err);
    });
};
    
module.exports = exports;