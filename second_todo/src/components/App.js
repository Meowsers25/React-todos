import React, { Component } from "react";
import "../App.css";
import Form from "./Form";
import List from "./List";

class App extends Component {
  state = {
    inputValue: "",
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
  handleChange = e => {
    // console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  };
  handleClick = () => {
    console.log("button clicked");
  };
  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos, inputValue: "" });
  };
  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
        <List handleClick={this.handleClick} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
