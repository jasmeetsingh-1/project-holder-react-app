import React from "react";

const ProjectContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default ProjectContext;
