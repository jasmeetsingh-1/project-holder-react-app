import { useReducer } from "react";
import ProjectContext from "./project-context";

function projectListReducer(state, action) {
  //action will contain to two things type which tell what to do
  //and second it will contain action.type
  if (action.type === "add") {
    //new project coming up
    const updatedItems = state.projectsList.concat(action.item);
    console.log("in adding");
    console.log("updated Items: ", updatedItems);
    return {
      items: updatedItems,
    };
  } else if (action.type === "remove") {
    //will remove the last
  }
}

const initial = {
  items: [],
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
    //project removing
  }

  const projectFinalList = {
    items: projectList.items,
    addItem: addingProject,
    removeItem: removingProject,
  };

  return (
    <ProjectContext.Provider value={projectFinalList}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default CartProvider;
