// @flow

export type TodoType = {
  id: number;
  task: string;
  completed: boolean;
};

export type TodosType = Map<number, TodoType>;

export type FilterType = 'all' | 'active' | 'completed';
export type FiltersType = Array<FilterType>;
