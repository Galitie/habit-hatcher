import Header from "./components/Header";
import Tagline from "./components/Tagline";
import Tasks from "./components/Tasks";
import { useState } from "react";
import { useEffect } from "react";
import AddTask from "./components/AddTask";
import Creature from "./components/Creature";
import Button from "./components/Button";

function App() {
  const [showAdd, setAdd] = useState(false);

  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem("tasks")) || [
      {
        id: 1,
        text: "Example - click X to delete a task",
        completed: false,
      },
      {
        id: 2,
        text: "Example - double click to mark a task completed",
        completed: false,
      },
      {
        id: 3,
        text: "Example - press the checkmark to submit!",
        completed: true,
      },
    ]
  );

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);

    // if you want the add task form to close after submitting a task
    //setAdd(!showAdd);
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
      <Tagline />
      <Creature />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
      ) : (
        "add a task, or if you are finished with your tasks today, hatch your egg!"
      )}
    </div>
  );
}

export default App;
