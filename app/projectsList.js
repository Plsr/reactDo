import React from "react";

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
					console.log(this.state.projects),
					this.state.projects.map(function(project) {
						return <li>{project}</li>
					})
				}	
			</ul>
		)
	}
});
