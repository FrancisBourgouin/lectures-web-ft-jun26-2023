const listAllTodos = (todoObj) => {
  const todoList = Object.values(todoObj);

  return todoList;
};

const fetchTodoById = (todoObj, todoId) => {
  const todo = todoObj[todoId];

  return todo;
};

const generateTodo = (todoObj, task, description) => {
  const todayDate = new Date();

  const newTodo = {
    id: Math.floor(Math.random() * 12303180138310),
    task,
    description,
    isComplete: false,
    date: todayDate.toLocaleString(),
  };

  todoObj[newTodo.id] = newTodo;

  return newTodo;
};

const editTodo = (todoObj, todoId, task, description) => {
  const currentTodo = todoObj[todoId];

  currentTodo.task = task;
  currentTodo.description = description;

  return currentTodo;
};

const deleteTodo = (todoObj, todoId) => {
  delete todoObj[todoId];
};

const toggleTodo = (todoObj, todoId) => {
  const currentTodo = todoObj[todoId];
  currentTodo.isComplete = !currentTodo.isComplete;

  return currentTodo;
};

module.exports = {
  listAllTodos,
  fetchTodoById,
  generateTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
};
