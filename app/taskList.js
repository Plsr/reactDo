import React from "react";
import SingleTask from "./singleTask";

export default React.createClass({
  getDefaulProps: function() {
    return {
      tasks: []
    }
  },
  render: function() {
    if(this.props.tasks) {
      var i = 0;
      return (
        <ul>
          {
            this.props.tasks.map(function(task) {
              return <SingleTask taskName={task} key={i++} />
            })
          }
        </ul>
      )
    } else {
      return null
    }
  }
});
