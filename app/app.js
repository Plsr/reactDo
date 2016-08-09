import React 							from "react";
import ReactDOM 					from "react-dom";
import TasklistFragment 	from "./tasklistComponent";
import ProjectsList 			from "./projectsList";

// Render Taks List
ReactDOM.render(
	<TasklistFragment />,
	document.getElementById("task-mount")
);

// Render Project List
ReactDOM.render(
	<ProjectsList />,
	document.getElementById("project-mount")
);
