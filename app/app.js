import React 							from "react";
import ReactDOM 					from "react-dom";
import TasklistFragment 	from "./tasklistFragment";
import ProjectsList 			from "./projectsList";

ReactDOM.render(
	<TasklistFragment />,
	document.getElementById("task-list")
);

ReactDOM.render(
	<ProjectsList />,
	document.getElementById("project-list")
);
