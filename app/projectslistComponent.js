import React from "react";
import ProjectsList from "./projectsList";

export default React.createClass({
  getInitialState: function() {
    return {
      projects: []
    }
  },
  addProject: function(event) {
    // Remove synthetic event from the pool
    // See https://facebook.github.io/react/docs/events.html#event-pooling
    event.persist();

    var updatedProjects = this.state.projects;
    var inputField = event.target.getElementsByTagName('input')[0];

    // Check if string is emtpy or only whitespace
    if (inputField.value.replace(/\s/g, '').length) {
      updatedProjects.push(inputField.value)
      this.setState({
        projects: updatedProjects
      });
    }

    // Remove saved string from input field
    inputField.value = "";

  },
  render: function() {
    return (
      <div className="projectslist-component" >
        <form name="add-project" onSubmit={this.addProject} action="#">
          <input type="text" placeholder="Add a project" />
          <button type="submit">Add</button>
          <ProjectsList projects={this.state.projects}/>
        </form>
      </div>
    )
  }
})
