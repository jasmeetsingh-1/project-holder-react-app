import { useState } from "react";

function NewTask(props) {
  const [newTask, setnewTask] = useState("");
  function addingNewTask(event) {
    event.preventDefault();
    props.task(newTask);
    setnewTask("");
  }
  return (
    <form onSubmit={addingNewTask} className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={newTask}
        onChange={(event) => {
          setnewTask(event.target.value);
        }}
        required
      />
      <button className="text-stone-700 hover:text-stone-95" type="submit">
        Add Task
      </button>
    </form>
  );
}
export default NewTask;
