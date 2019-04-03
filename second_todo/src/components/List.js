import React, { Component } from "react";
import Task from "./Task";

class List extends Component {
  state = {
    todos: [
      {
        value: "clean the kitchen",
        done: false
      },
      {
        value: "walk the doggos",
        done: true
      }
    ]
  };
  render() {
    return (
      <div className="List">
        {this.state.todos.map((todo, index) => {
          return <Task key={index} todo={todo} />;
        })}
      </div>
    );
  }
}

export default List;
