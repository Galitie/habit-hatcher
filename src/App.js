import Header from "./components/Header";
import Tagline from "./components/Tagline";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Creature from "./components/Creature";

function App() {
  const [showAdd, setAdd] = useState(false);

  const [tasks, setTasks] = useState([
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
  ]);

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
      {tasks.length > 0 ? <Creature /> : 'Click "Add Task" to add a task!'}
      {showAdd && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
    </div>
  );
}

export default App;
