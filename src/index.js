// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import Todos from './todos/index';
import todosStore from './todos/store';

ReactDOM.render(
  <Todos store={todosStore} />,
  document.getElementById('app')
);
