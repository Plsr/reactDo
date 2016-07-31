import React from "react";

export default React.createClass({

	// Default state, never displayed
	// TODO: Could this be removed?
  getInitialState: function() {
    return {
      taskName: "A Task",
      id: 0,
      done: false
    }
  },

  // Toogle done state of a task
  toggleDone: function() {
    this.setState({ done: !this.state.done })
  },

  render: function() {
		// Check checkbox and strike text if task is marked as done
    if(this.state.done == true) {
      return (
        <li>
          <input type="checkbox" defaultChecked onClick={this.toggleDone}></input>
          <strike>{this.props.taskName}</strike>
        </li>
      )
    } else {
      return (
        <li key={this.props.id}>
          <input type="checkbox" onClick={this.toggleDone}></input>
          {this.props.taskName}
        </li>
      )
    }
  }
});
