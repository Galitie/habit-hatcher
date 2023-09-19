import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "This is a task",
      dateDue: "9/19/2023",
      reminder: true,
    },

    {
      id: 2,
      text: "This is another task",
      dateDue: "10/1/2023",
      reminder: false,
    },
    {
      id: 3,
      text: "This is another task",
      dateDue: "10/1/2025",
      reminder: false,
    },
    {
      id: 4,
      text: "This is another task",
      dateDue: "10/1/2023",
      reminder: false,
    },
    {
      id: 5,
      text: "Taaaaaaaaask",
      dateDue: "10/6/2023",
      reminder: false,
    },
    {
      id: 6,
      text: "Taskerbee",
      dateDue: "9/1/2023",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
