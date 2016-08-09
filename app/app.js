import React                  from "react";
import ReactDOM               from "react-dom";
import TasklistComponent       from "./tasklistComponent";
import ProjectsListComponent  from "./projectslistComponent";

// Render Taks List
ReactDOM.render(
	<TasklistComponent />,
	document.getElementById("task-mount")
);

// Render Project List
ReactDOM.render(
	<ProjectsListComponent />,
	document.getElementById("project-mount")
);
