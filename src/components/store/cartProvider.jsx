import { useReducer } from "react";
import ProjectContext from "./project-context";

function projectListReducer(state, action) {
  if (action.type === "add") {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  } else if (action.type === "remove") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
    };
  } else if (action.type === "addingNewTask") {
    const updatedItems = [...state.items];
    const indexOFItem = state.items.findIndex(
      (item) => item.id === action.data.id
    );
    const itemToUdpate = state.items[indexOFItem];
    const newTaskList = [action.data.taskAdding, ...itemToUdpate.task];
    const itemUpdated = {
      ...itemToUdpate,
      task: newTaskList,
    };
    updatedItems[indexOFItem] = itemUpdated;
    return {
      items: updatedItems,
    };
  }
}

const initial = {
  items: [
    {
      id: 1,
      title: "Expense Handler",
      description:
        "The primary purpose of this application is to help users manage their expenses efficiently. Users can easily add their expenses, including a title, amount, and date. The application provides a user-friendly interface to input and manage financial data.",
      dueDate: new Date(2020, 5, 10),
      task: ["add an array", "remove an array"],
    },
    {
      id: 2,
      title: "Investment Calculator",
      description:
        "Engineered the Investment Calculator web application using React.js,focusing on improving accuracy in calculations and enhancing the userexperience. Its primary function is to assist users in making informedinvestment decisions by providing accurate calculations based on userinput",
      dueDate: new Date(2020, 5, 10),
      task: [],
    },
  ],
};
function CartProvider(props) {
  const [projectList, projectListReducerFunction] = useReducer(
    projectListReducer,
    initial
  );

  function addingProject(item) {
    projectListReducerFunction({ type: "add", item: item });
  }

  function removingProject(id) {
    projectListReducerFunction({ type: "remove", id: id });
  }

  function addingNewTask(newTask) {
    projectListReducerFunction({ type: "addingNewTask", data: newTask });
  }

  const projectFinalList = {
    items: projectList.items,
    addItem: addingProject,
    removeItem: removingProject,
    addTask: addingNewTask,
  };

  return (
    <ProjectContext.Provider value={projectFinalList}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default CartProvider;
