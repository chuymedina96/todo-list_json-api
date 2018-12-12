/* global $ */
$(document).ready(function(){
    var url = "/api/todos";
    $.getJSON(url)
    .then(addToDos) ;
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
        var newToDo = $('<li class="task">' + todo.name + todo.completed + '</li>');
        if(todo.completed){
            newToDo.addClass("done");
        }
        $(".list").append(newToDo);
    });
}
function createToDo(){
    usrInput = $("#todoInput").val();
    console.log(usrInput);
    //$.post(url, {name: usrInput });
}