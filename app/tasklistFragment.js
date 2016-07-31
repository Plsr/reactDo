import React from "react";
import TaskList from "./taskList";

export default React.createClass({
  getInitialState: function() {
    return {
      tasks: []
    }
  },
  addTask: function(event) {
    // Remove synthetic event from the pool
    // See https://facebook.github.io/react/docs/events.html#event-pooling
    event.persist();

    var updatedTasks = this.state.tasks;
    var inputField = event.target.getElementsByTagName('input')[0];

    // Check if string is emtpy or only whitespace
    if (inputField.value.replace(/\s/g, '').length) {
      updatedTasks.push(inputField.value)
      this.setState({
        tasks: updatedTasks
      });
    }

    // Remove saved string from input field
    inputField.value = "";

  },
  render: function() {
    return (
      <div className="tasklist-fragment" >
        <form name="add-task" onSubmit={this.addTask} action="#">
          <input type="text" placeholder="Add a task" />
          <button type="submit">Add</button>
          <TaskList tasks={this.state.tasks}/>
        </form>
      </div>
    )
  }
});
