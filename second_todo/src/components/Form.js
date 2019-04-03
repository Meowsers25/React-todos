import React, { Component } from "react";

class Form extends Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  };
  render() {
    return (
      <div className="Form">
        <form>
          <input
            onChange={e => this.handleChange(e)}
            value={this.state.inputValue}
          />
        </form>
      </div>
    );
  }
}

export default Form;