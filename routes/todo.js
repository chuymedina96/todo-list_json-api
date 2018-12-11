var express     = require("express"),
    router      = express.Router(), //modular chunks
    db          = require("../models/index.js"),
    helpers     = require("../helpers/todos.js");

router.route("/")
    .get(helpers.getToDos)
    .post(helpers.newTodos);

router.route("/:todoId")
    .get(helpers.getOneTodo)
    .put(helpers.updatedTodos)
    .delete(helpers.deleteTodos);

module.exports = router;