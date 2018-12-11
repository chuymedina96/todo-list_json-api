var express     = require("express"),
    app         = express(),
    PORT        = process.env.PORT || 3000,
    bodyParser  = require("body-parser");


var todoRoutes  = require('./routes/todo.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));

app.get("/", function(req,res){
    res.json('{ message: "hi from js object"}');
});

app.use('/api/todos', todoRoutes);


app.listen(PORT, function(){
    console.log("Server is running on port: " + PORT);
})