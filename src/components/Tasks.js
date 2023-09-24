import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  console.log(tasks, "from Tasks");
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
