import { Action } from '@ngrx/store';
import { Task } from 'src/app/model/task';

export enum TaskActionTypes {
  Add = '[Task] Add',  
  Reset = '[Task] Reset',
}

export class TaskAdd implements Action {
  readonly type = TaskActionTypes.Add;
  constructor(public payload: { task: Task } ) {}
}

export class TaskReset implements Action {
  readonly type = TaskActionTypes.Reset;
  constructor(public payload: { task: Task }) {}
}


export type TaskAction =  TaskAdd | TaskReset;