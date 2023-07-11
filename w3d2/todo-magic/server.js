const express = require("express");

const { todoListObj } = require("./todoData.js");
const {
  listAllTodos,
  fetchTodoById,
  toggleTodo,
  generateTodo,
  editTodo,
} = require("./todoHelpers.js");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.json("🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔");
});

/**
 *
 * Create a todo
 *
 */
server.get("/todos/new", (req, res) => {
  // Todo Creation Page

  res.render("newtodo");
});
server.post("/todos", (req, res) => {
  // Create a todo
  const task = req.body.task;
  const description = req.body.description;

  const newTodo = generateTodo(todoListObj, task, description);

  console.log(newTodo);

  return res.redirect("/todos");
});
/**
 *
 * Edit a todo
 *
 */
server.get("/todos/:todo_id/edit", (req, res) => {
  // Todo Edit Page
  const todoId = req.params.todo_id;
  const currentTodo = todoListObj[todoId];

  const templateVars = { todo: currentTodo };
  res.render("edittodo", templateVars);
});
server.post("/todos/:todo_id/edit", (req, res) => {
  // Edit a todo
  // const task = req.body.task;
  // const description = req.body.description;
  const todoId = req.params.todo_id;
  const { task, description } = req.body; // Extract the keys called task and description, and create variables out of it

  const updatedTodo = editTodo(todoListObj, todoId, task, description);

  res.redirect("/todos");
});
server.post("/todos/:todo_id/toggle", (req, res) => {
  const todoId = req.params.todo_id;

  const currentTodo = toggleTodo(todoListObj, todoId);

  res.redirect("/todos");
});

/**
 *
 * Delete a todo
 *
 */
server.post("/todos/1/delete", (req, res) => {
  // Delete a todo
});
/**
 *
 * View the todos
 *
 */
server.get("/todos", (req, res) => {
  // View all the todos
  const allTodos = listAllTodos(todoListObj);

  // res.json(allTodos);
  const templateVars = { todos: allTodos };
  return res.render("todos", templateVars);
});
server.get("/todos/:todo_id", (req, res) => {
  // View a singular todo
  const todo = fetchTodoById(todoListObj, req.params.todo_id);

  const templateVars = { todo };
  return res.render("todo", templateVars);
  // return res.json(singularTodo);
});

// /todos/all

server.listen(3000, () => {
  console.log("Server is listening !");
});
