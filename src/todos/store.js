// @flow

import { observable, computed, asMap } from 'mobx';
import getUniqueId from '../utils/get-unique-id';

import type { TodoType, TodosType, FilterType, FiltersType } from './types';

const ALL_TODOS = 'all';
const ACTIVE_TODOS = 'active';
const COMPLETED_TODOS = 'completed';

class TodosStore {
  @observable todos : TodosType = asMap();
  @observable selectedFilter : FilterType = ALL_TODOS;
  filters : FiltersType = [ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS];

  @computed get completedTodosCount () : string {
    return `${Array.from(this.todos.values()).filter(todo => todo.completed === true).length}/${this.todos.size}`;
  }

  @computed get filteredTodos () : Array<TodoType> {
    const values = Array.from(this.todos.values());

    if (this.selectedFilter === ALL_TODOS) {
      return values;
    }

    return values.filter(todo => todo.completed === (this.selectedFilter === COMPLETED_TODOS));
  }

  addTodo (task : string) : void {
    if (!task) {
      return;
    }

    const id = getUniqueId();

    this.todos.set(id, {
      task,
      id,
      completed: false
    });
  }

  deleteTodo (id: number) : void {
    this.todos.delete(id);
  }

  changeCompletion (id: number) : void {
    const todo = this.todos.get(id);

    if (!todo) {
      return;
    }

    todo.completed = !todo.completed;
  }

  changeSelectedFilter (filter: FilterType) {
    this.selectedFilter = filter;
  }

}

export default new TodosStore();
