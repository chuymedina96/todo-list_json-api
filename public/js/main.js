/* global $ */
$(document).ready(function(){
    var url = "/api/todos";
    $.getJSON(url)
    .then(addToDos);
    $("#todoInput").keypress(function(event){
        if(event.which == 13){
            createToDo();
        }
    });
    /*
    .catch(function(err){
        console.log(err);
    });*/
});

function addToDos(todos){
    todos.forEach(function(todo){
        addTodo(todo);
    });
}


function addTodo(todo){
    var newToDo = $('<li class="task">' + todo.name + todo.completed + '</li>');
    if(todo.completed){
        newToDo.addClass("done");
    }
    $(".list").append(newToDo);
}


function createToDo(){
    var usrInput = $("#todoInput").val();
    $.post("/api/todos", {name: usrInput})
    .then(function(newTodo){
        console.log(newTodo)
    })
    .catch(function(err){
        console.log(err);
    })
    //$.post(url, {name: usrInput });
}

function deleteToDo(){
    
}