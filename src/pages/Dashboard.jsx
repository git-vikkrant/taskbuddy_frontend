import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const { userName, logout } = useAuth();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      alert("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Task Buddy</h2>
      <div className="welcome-message">Welcome, {userName || "User"}!</div>
      <button onClick={handleLogout} className="logoutBtn">
        Logout
      </button>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} onTasksUpdated={fetchTasks} />
    </div>
  );
}
