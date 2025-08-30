import React, { useState } from "react";

function App() {
  const [task, setTask] = useState(""); // to store input value
  const [tasks, setTasks] = useState([]); // to store all tasks

  // Add task
  const addTask = () => {
    if (task.trim() === "") return; // prevent empty task
    setTasks([...tasks, task]); // add new task
    setTask(""); // clear input
  };

  // Delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ To-Do List</h1>

      {/* Input + Button */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add</button>

      {/* Tasks List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <button onClick={() => deleteTask(index)} style={{ color: "red" }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
