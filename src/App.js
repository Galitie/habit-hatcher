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
  const [hatch, setHatch] = useState(
    JSON.parse(window.localStorage.getItem("tasksFinished")) || false
  );

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
        text: "Example - press 'Add Task' to add a new task",
        completed: false,
      },
    ]
  );

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    window.localStorage.setItem("tasksFinished", hatch);
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

  // Toggle task complete
  const toggleComplete = async (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    await delay(1000);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Delay for animation
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="container">
      <Header onAdd={() => setAdd(!showAdd)} showAddTask={showAdd} />
      <Tagline />
      <Creature hatch={hatch} />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
      ) : (
        <Button
          text={
            hatch
              ? "Your monster hatched! Start a new list!"
              : "I finished all my tasks for today!"
          }
          color={"green"}
          className={"btn-block"}
          onClick={() => setHatch(!hatch)}
        />
      )}
    </div>
  );
}

export default App;
