import { useState } from "react";

function AddTask() {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [difficulty, setDifficulty] = useState("1");

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day task is due</label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Difficulty of task ( 1=easy, 2=med, 3=hard )</label>
        <input
          type="number"
          min="1"
          max="3"
          placeholder="1"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
}

export default AddTask;
