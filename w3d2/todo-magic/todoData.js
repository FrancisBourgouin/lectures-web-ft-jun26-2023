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

module.exports = { todoListObj, todoListArr };
