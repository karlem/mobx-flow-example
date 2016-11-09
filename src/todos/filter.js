// @flow

import React from 'react';

import type { FilterType } from './types';

type Props = {
  filter : FilterType;
  isSelected: boolean;
  onChangSelectedFilterClick: Function
};

export default function Filter ({filter, isSelected, onChangSelectedFilterClick} : Props) : any {
  const onChangSelectedFilterClickWrapped = () => onChangSelectedFilterClick(filter);

  return (
    <button
      style={{marginRight: 10}}
      onClick={onChangSelectedFilterClickWrapped}
      disabled={isSelected}>
      {filter}
    </button>
  );
};
