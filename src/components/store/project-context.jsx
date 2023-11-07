import React from "react";

const ProjectContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  addTask: () => {},
});

export default ProjectContext;
