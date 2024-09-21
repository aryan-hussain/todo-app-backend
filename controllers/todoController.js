const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const { title, status, description, dueDate } = req.body;
  const todo = await Todo.create({ title, user: req.user.id, status, description, dueDate });
  res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "Not authorized" });
  }
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "Not authorized" });
  }
  await todo.remove();
  res.json({ message: "Todo removed" });
};
