import React from "react";
import SingleProject from "./singleProject";

export default React.createClass({
	getInitialState: function() {
		return {
			projects: []
		}
	},
	render: function() {
		return (
			<ul>
				{
					this.props.projects.map(function(project) {
						return <SingleProject key={project} name={project} />
					})
				}
			</ul>
		)
	}
});
