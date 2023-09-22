import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAdd, setAdd] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "This is a task",
      dateDue: "9/19/2023",
      difficulty: 1,
      completed: false,
    },

    {
      id: 2,
      text: "This is another task",
      dateDue: "10/1/2023",
      difficulty: 2,
      completed: true,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setAdd(!showAdd)} showAddTask={showAdd} />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
      ) : (
        'Click "Add Task" to add a task!'
      )}
    </div>
  );
}

export default App;
