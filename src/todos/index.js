// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import type { TodosType, TodoType, FilterType, FiltersType } from './types';

import Todo from './todo';
import Form from './form';
import Filter from './filter';

type Props = {
  store: {
    todos: TodosType;
    filteredTodos: Array<TodoType>;
    selectedFilter: FilterType;
    filters: FiltersType;
    completedTodosCount: string;
    addTodo: Function;
    deleteTodo: Function;
    changeCompletion: Function;
    changeSelectedFilter: Function;
  }
};

@observer
export default class Todos extends Component {

  props: Props;

  onAddTodoSubmit = (task : string) : void => {
    this.props.store.addTodo(task);
  };

  onTodoDeleteClick = (id : number) : void => {
    this.props.store.deleteTodo(id);
  };

  onTodoCompletionChange = (id : number) : void => {
    this.props.store.changeCompletion(id);
  };

  onChangSelectedFilterClick = (filter : FiltersType) : void => {
    this.props.store.changeSelectedFilter(filter);
  };

  render () : any {
    const store = this.props.store;
    const { todos, filteredTodos, filters, selectedFilter, completedTodosCount } = store;

    return (
      <div>
        {!todos.size ? `No TODOs!` : `Completed todos: ${completedTodosCount}`}
        <ul>
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDeleteClick={this.onTodoDeleteClick}
              onCompletionChange={this.onTodoCompletionChange}
            />
          ))}
        </ul>
        <Form
          onAddTodoSubmit={this.onAddTodoSubmit}
        />
        <br />
        {!todos.size ? false : filters.map(filter => (
          <Filter
            key={filter}
            onChangSelectedFilterClick={this.onChangSelectedFilterClick}
            isSelected={filter === selectedFilter}
            filter={filter}
          />
        ))}
      </div>
    );
  }
}
