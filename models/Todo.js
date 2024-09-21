const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status:{type: String, required: false},
  description:{type: String, required: false},
  dueDate:{type: Date, required: false}
});

module.exports = mongoose.model("Todo", TodoSchema);
