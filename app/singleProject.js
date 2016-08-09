import React from "react";

export default React.createClass({
  getInitialState: function() {
    return {
      name: 'project'
    }
  },
  render: function() {
    return (
      console.log("test"),
      <li key={this.props.name}>{this.props.name}</li>
    )
  }
})
