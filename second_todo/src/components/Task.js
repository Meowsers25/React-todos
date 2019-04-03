import React, { Component } from "react";

class Task extends Component {
  state = {};
  render() {
    return (
      <div className="Task">
        <span
          style={{
            textDecoration: this.props.todo.done ? "line-through" : "none"
          }}
        >
          {this.props.todo.value}
        </span>
        <button>{this.props.todo.done ? "Undo" : "Complete"}</button>
      </div>
    );
  }
}

export default Task;
