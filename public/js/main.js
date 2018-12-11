/* global $ */
$(document).ready(function(){
    var url = "/api/todos";
    $.getJSON(url)
    .then(addToDos)
    .catch(function(err){
        console.log(err);
    });
});

function addToDos(todos){
    todos.forEach(function(todo){
        var newToDo = $('<li class="task">' + todo.name + '</li>');
        $(".list").append(newToDo);
    });
}