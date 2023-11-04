import { useContext, useState } from "react";
import ProjectContext from "./store/project-context";

const labelCssClasses = "text-sm font-bold uppercase text-stone-500";
const inputCssClasses =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

function NewProject(props) {
  const context = useContext(ProjectContext);
  const [titleField, setTitleField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [dueDateField, setDueDateField] = useState("");

  function inputHandler(id, value) {
    if (id === "title") {
      setTitleField(value);
    } else if (id === "description") {
      setDescriptionField(value);
    } else {
      setDueDateField(value);
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    const generatingId = Math.floor(Math.random() * 1000000) + 1;
    const projectData = {
      id: generatingId.toString(),
      title: titleField,
      description: descriptionField,
      dueDate: new Date(dueDateField),
    };

    context.addItem(projectData);

    setTitleField("");
    setDescriptionField("");
    setDueDateField("");
  }
  function cancelHandler() {
    setTitleField("");
    setDescriptionField("");
    setDueDateField("");
    props.cancelButton();
  }
  function clearHandler() {
    setTitleField("");
    setDescriptionField("");
    setDueDateField("");
  }
  return (
    <form onSubmit={submitHandler} className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            type="button"
            onClick={clearHandler}
            className="text-stone-800 hover: text-stone-950 pr-4"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={cancelHandler}
            className="text-stone-800 hover: text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <label className={labelCssClasses} htmlFor="title">
          Title:
        </label>
        <input
          className={inputCssClasses}
          id="title"
          placeholder="enter title"
          type="text"
          value={titleField}
          onChange={(event) => {
            inputHandler("title", event.target.value);
          }}
          required
        />
      </div>
      <div>
        <label className={labelCssClasses} htmlFor="description">
          Description:
        </label>
        <textarea
          className={inputCssClasses}
          id="description"
          placeholder="enter description"
          value={descriptionField}
          onChange={(event) => {
            inputHandler("description", event.target.value);
          }}
          required
        />
      </div>
      <div>
        <label className={labelCssClasses} htmlFor="dueDate">
          Due Date:{" "}
        </label>
        <input
          className={inputCssClasses}
          id="dueDate"
          placeholder="enter title"
          type="date"
          min="2000-01-01"
          max="2030-12-31"
          value={dueDateField}
          onChange={(event) => {
            inputHandler("dueDate", event.target.value);
          }}
        />
      </div>
    </form>
  );
}

export default NewProject;
