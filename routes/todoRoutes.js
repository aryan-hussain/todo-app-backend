const express = require("express");
const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controllers/todoController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(authMiddleware, getTodos).post(authMiddleware, addTodo);

router.route("/:id").put(authMiddleware, updateTodo).delete(authMiddleware, deleteTodo);

module.exports = router;
