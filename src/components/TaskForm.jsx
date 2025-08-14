import { useState } from "react";
import API from "../services/api";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    try {
      await API.post("/tasks", { title, description, category });
      setTitle("");
      setDescription("");
      setCategory("");
      onTaskAdded();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add task");
    }
  };

  return (
    <form className="task-form" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category (optional)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
