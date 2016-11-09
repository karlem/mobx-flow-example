// @flow

import React, { Component } from 'react';

type State = {
  todoText: string;
};

type Props = {
  onAddTodoSubmit: Function
};

export default class Form extends Component {

  props: Props;

  state : State = {
    todoText: ''
  };

  onTextInputChange = (e : Object) : void => {
    this.setState({todoText: e.target.value});
  };

  onAddTodoSubmit = (e : Object) : void => {
    e.preventDefault();

    this.props.onAddTodoSubmit(this.state.todoText);
    this.setState({todoText: ''});
  };

  render () : any {
    return (
      <form onSubmit={this.onAddTodoSubmit}>
        <label>Add todo:</label>
        <input type="text" value={this.state.todoText} onChange={this.onTextInputChange} />
        <button>Save</button>
      </form>
    );
  }

}
