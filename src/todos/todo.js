// @flow

import React from 'react';

import type { TodoType } from './types';

type Props = {
  todo : TodoType;
  onDeleteClick : Function;
  onCompletionChange: Function;
};

export default function Todo ({todo, onDeleteClick, onCompletionChange} : Props) : any {
  const onDeleteClickWrapped = () => onDeleteClick(todo.id);
  const onCompletionChangeWrapped = () => onCompletionChange(todo.id);

  return (
    <li>
      <input onChange={onCompletionChangeWrapped} checked={todo.completed} type="checkbox" /> {todo.task} - <button onClick={onDeleteClickWrapped}>Delete</button>
    </li>
  );
};
