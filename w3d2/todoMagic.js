const { todoListObj } = require("./todoData.js");

const { listAllTodos } = require("./todoHelpers.js");

const result = listAllTodos(todoListObj);

console.log(result);
