import { Action, createSelector } from '@ngrx/store';
import { Task } from 'src/app/model/task';
import { TaskAction, TaskActionTypes } from '../actions/todo.action';

export interface TaskState {
  task: Task[];
}

const initialTaskState: TaskState = {
  task: [],
};

export function taskReducer(
  taskStateList = initialTaskState,
  action: Action
): TaskState {
  const taskAction = action as TaskAction;

  switch (taskAction.type) {
    case TaskActionTypes.Add:
      //let myTask:TaskState = <TaskState>{ task:{...taskAction.payload.task,id:getBiggestTaskId(taskStateList) + 1}}

      //console.table( <TaskState>{ task:{...taskAction.payload.task,id:getBiggestTaskId(taskStateList) + 1}});
      console.table(taskStateList);

      return <TaskState>{
        task: [
          ...taskStateList.task,
          <Task>{
            ...taskAction.payload.task,
            id: getBiggestTaskId(taskStateList.task) + 1,
          },
        ],
      };

    // return  [
    //   ...taskStateList,{ task:{...taskAction.payload.task,id:getBiggestTaskId(taskStateList) + 1}}
    // ]

    // console.log(`TaskActionTypes.Add ${taskStateList}`);

    //let myTask =  {...taskAction.payload.task};

    //myTask.id = getBiggestTaskId(taskStateList) + 1;

    case TaskActionTypes.Reset:
      return taskStateList;

    // return Object.assign({}, taskStateList, {
    //   ...action.payload,
    //   id: getBiggestTaskId(taskStateList) + 1,
    // });

    default:
      return taskStateList;
  }
}

function getBiggestTaskId(taskList: Task[]): number {
  if (taskList[0] != null) {
    return [...taskList].reduce((first, second) =>
      first.id > second.id ? first : second
    ).id;
  } else {
    return 0;
  }
}

function sortTaskList(taskList: TaskState) : TaskState{
  let sortedTaskList!:TaskState ;
  if(taskList.task.length > 2){
    sortedTaskList.task = taskList.task.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return sortedTaskList;
  }
  return taskList;
  
}

// this.taskList.push({ ...task, id: this.biggestTaskId.id + 1 });
// } else {
//   this.taskList.push({ ...task, id: 1 });
// //console.log('task.date.toString() : ' + new Date(task.date).getTime());

export const selectTask = (state: any) => state.taskStateList;

export const selectTaskList = createSelector(selectTask, (state) => state.task);
