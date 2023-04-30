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
  taskStateList:TaskState = initialTaskState,
  action: Action
): TaskState {
  const taskAction = action as TaskAction;

  switch (taskAction.type) {
    case TaskActionTypes.Add:
      //let myTask:TaskState = <TaskState>{ task:{...taskAction.payload.task,id:getBiggestTaskId(taskStateList) + 1}}

      //console.table( <TaskState>{ task:{...taskAction.payload.task,id:getBiggestTaskId(taskStateList) + 1}});
      console.table(taskStateList);
      //return new state sorted
      return sortTaskList(<TaskState>{
        task: [
          ...taskStateList.task,
          <Task>{
            ...taskAction.payload.task,
            id: getBiggestTaskId(taskStateList.task) + 1,
          },
        ],
      });

    // return  [
    //   ...taskStateList,{ task:{...taskAction.payload.task,id:getBiggestTaskId(taskStateList) + 1}}
    // ]

    // console.log(`TaskActionTypes.Add ${taskStateList}`);

    //let myTask =  {...taskAction.payload.task};

    //myTask.id = getBiggestTaskId(taskStateList) + 1;

    case TaskActionTypes.Reset:
     return  <TaskState>{
        task:removeTask(taskStateList.task,taskAction.payload.task)
      };

     

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
  //let sortedTaskList :TaskState = {...taskList} ;
  if(taskList.task.length > 1){
    taskList.task = taskList.task.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    console.table(`sortedTaskList ${taskList.task}`);
    return taskList;
  }

  console.table(`sortedTaskList ${taskList.task}`);
  return taskList;
  
}

function removeTask(taskList: Task[], task:Task) : Task[]{

  console.log(`removed task reducer taskList.task.findIndex ${task.message}`)
  const index: number = taskList.findIndex(
    value => value.id === task.id
  );
  console.log(`removed task reducer index value ${index}`)
  let tl:Task[] = [...taskList];
  //const lt: TaskState = taskList;
  console.table(`removed task  ${tl.splice(index, 1)  }}`);
 // taskList.task.splice(index, 1);

  return tl;
}

// this.taskList.push({ ...task, id: this.biggestTaskId.id + 1 });
// } else {
//   this.taskList.push({ ...task, id: 1 });
// //console.log('task.date.toString() : ' + new Date(task.date).getTime());

export const selectTask = (state: any) => state.taskStateList;

export const selectTaskList = createSelector(selectTask, (state) => state.task);
