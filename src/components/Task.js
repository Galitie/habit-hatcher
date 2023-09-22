import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.completed ? "completed" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        {task.completed ? (
          <FaCheck
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        ) : (
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        )}
      </h3>
      <p>{task.dateDue}</p>
      <p>Difficulty: {task.difficulty}</p>
    </div>
  );
};

export default Task;
