# TODO LIST - THE PLAN !

## Functionality

- View all todos
- View a todo
- Add a todo
- Remove a todo
- Edit/Update a todo (completion / text)

## Data structure

### Todo Item

```jsx
const todoItem = {
  id: 1,
  task: "Do the laundry",
  description: "Don't forget to separate the whites",
  isComplete: false,
  date: "2023-06-13",
};
```

### Todo List

Object of objects: "Instantly" access any todoItem, easily (Great!) Harder to iterate over (Bad :/ )
Array of objects: Easy to iterate, hard to access a specific element

```jsx
const todoListArr = [todoItem, todoItem]; // 1 x
const todoListObj = { id: todoItem, id: todoItem, id: todoItem }; // 2 xxxxxxxx
```

## Seed

```jsx
const todo1 = {
  id: 1,
  task: "Do the laundry",
  description: "Don't forget to separate the whites",
  isComplete: false,
  date: "2023-06-13",
};
const todo2 = {
  id: 2,
  task: "Make lunch",
  description: "No tomatoes please",
  isComplete: true,
  date: "2023-06-12",
};
const todo3 = {
  id: 3,
  task: "LHL Homework",
  description: "You'll be done when you'll be done, which is in probably 12 weeks",
  isComplete: false,
  date: "2023-05-29",
};

const todoListObj = { 1: todo1, 2: todo2, 3: todo3 };
const todoListArr = [todo1, todo2, todo3];
```

## Actions

### View all todos

We need to iterate over every todoItem

```jsx
// 1
const listAllTodos = (todoObj) => {
  const todoList = Object.values(todoObj);

  return todoList;
};
// 2
// const listAllTodos = (todoObj) => Object.values(todoObj);
```

### View a todo

We need to fetch to object of a singular todoItem

```jsx
const fetchTodoById = (todoObj, todoId) => {
  const todo = todoObj[todoId];

  return todo;
};
```

### Add a todo

We need to create a todo, task and description string to build it

```jsx
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
```

### Remove a todo

Deletes a todo using its id

```jsx
const deleteTodo = (todoObj, todoId) => {
  delete todoObj[todoId];
};
```

### Toggle todo complete

```jsx
const toggleTodo = (todoObj, todoId) => {
  const currentTodo = todoObj[todoId];
  currentTodo.isComplete = !currentTodo.isComplete;

  return currentTodo;
};
```

### Edit/Update a todo (completion / text)

## Events CRUD (GET POST PUT DELETE ...)

BREAD => Browse Read Edit Add Delete
CRUD => Create Read Update Delete

- View all the todos : /todos GET
- View a singular todo : /todos/1 GET

- Todo Creation Page : /todos/new GET
- Create a todo : /todos POST

- Todo Edit Page /todos/1/edit GET
- Edit a todo : /todos/1/edit PUT-POST

- Delete a todo : /todos/1/delete DELETE-POST

## Routes & Events

## Packages

- Express (https://expressjs.com/)
- UUID (https://www.npmjs.com/package/uuid)
- EJS (https://www.npmjs.com/package/ejs)
- Nodemon (https://www.npmjs.com/package/nodemon)
