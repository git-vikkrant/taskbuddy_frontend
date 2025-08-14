import API from "../services/api";

export default function TaskList({ tasks, onTasksUpdated }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    try {
      await API.delete(`/tasks/${id}`);
      onTasksUpdated();
    } catch (err) {
      alert("Failed to delete task");
    }
  };

  const toggleStatus = async (task) => {
    try {
      await API.put(`/tasks/${task.id}`, {
        ...task,
        status: !task.status,
      });
      onTasksUpdated();
    } catch (err) {
      alert("Failed to update task");
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${task.status ? "done" : ""}`}
          >
            <div>
              <strong>{task.title}</strong>{" "}
              <span>({task.category || "No category"})</span>
              <p>{task.description}</p>
            </div>
            <div className="task-actions">
              <button onClick={() => toggleStatus(task)}>
                {task.status ? "Mark Pending" : "Mark Done"}
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
