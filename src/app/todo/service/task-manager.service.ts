import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable, of, Subject, tap } from 'rxjs';
import { Task } from 'src/app/model/task';
import { TaskAdd } from '../store/actions/todo.action';
import { selectTaskList, TaskState } from '../store/reducers/todo.reducer';

@Injectable()
//{providedIn: 'root'}
export class TaskManagerService {
  subjectTasksList$: Subject<Task[]> = new Subject<Task[]>();
  tasksList: Task[] = [];
  biggestTaskId!: Task;
  tasksList$!: Observable<Task[]>;

  constructor(private store: Store<TaskState>) {
    this.store
      .pipe(
        select((state: any) => state.appTaskState.task),
        //tap((tasks) => (this.tasksList$ = of(tasks))),
        tap(() => console.log('in task manager service pipe')),
        tap((tasks) => console.log(tasks))
      )
      .subscribe((tasks) => {
        //(this.tasksList$ = of(tasks)),
        this.subjectTasksList$.next(tasks)
      });
  } 

  addTask(task: Task): void {
    this.store.dispatch(new TaskAdd({ task }));

    // if (this.taskList[0] != null) {
    //   this.biggestTaskId = [...this.taskList].reduce((first, second) =>
    //     first.id > second.id ? first : second
    //   );
    //   this.taskList.push({ ...task, id: this.biggestTaskId.id + 1 });
    // }
    // else{
    //   this.taskList.push({ ...task, id: 1 });
    // }

    // this.taskList.sort(
    //   (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    // );
    // this.taskListe$.next(this.taskList);
    // //console.table(`TaskManagerService.addTask value : ${this.taskList}`);
  }

  getTasksList(): Observable<Task[]> {
    return this.subjectTasksList$.asObservable();
  }

  retrieveTask(task: Task) {
    console.log('task.id :  ' + task.id);
    const index: number = this.tasksList.findIndex(
      (value) => value.id === task.id
    );

    // this.tasksList.splice(index, 1);
    //this.tasksList$.next(this.tasksList);
  }
}
