import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Creature from "./components/Creature";

function App() {
  const [showAdd, setAdd] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Example task - 2x click to complete",
      dateDue: "",
      difficulty: 1,
      completed: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

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
      {tasks.length > 0 ? <Creature /> : 'Click "Add Task" to add a task!'}
      {showAdd && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
    </div>
  );
}

export default App;
