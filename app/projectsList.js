import React from "react";
import SingleProject from "./singleProject";

export default React.createClass({
	getInitialState: function() {
		return {
			projects: ["Private", "Business", "Fun"] // Placeholder
		}
	},
	render: function() {
		return (
			<ul>
				{
					this.state.projects.map(function(project) {
						return <SingleProject key={project} name={project} />
					})
				}
			</ul>
		)
	}
});
