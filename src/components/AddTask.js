import { useState } from "react";

function AddTask({ onAdd }) {
  //const today = new Date().toISOString().split("T")[0];

  const [text, setText] = useState("");
  //const [dateDue, setDateDue] = useState(today);
  //const [difficulty, setDifficulty] = useState("1");
  const [completed, setCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task!");
      return;
    }

    onAdd({ text, completed }); //add dateDue if you want date, add difficulty if you want difficulty rating

    setText("");
    setCompleted(false);
    //setDateDue(today);
    //setDifficulty("1");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      {/* date form */}
      {/* <div className="form-control">
        <label>Day task is due</label>
        <input
          type="date"
          name="date"
          min={today}
          value={dateDue}
          onChange={(e) => setDateDue(e.target.value)}
        />
      </div> */}
      {/* <div className="form-control">
        <label>Difficulty of task ( 1=easy, 2=med, 3=hard )</label>
        <input
          type="number"
          min="1"
          max="3"
          placeholder="1"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        />
      </div> */}

      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
}

export default AddTask;
