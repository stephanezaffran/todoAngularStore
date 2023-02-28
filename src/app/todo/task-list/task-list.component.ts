import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, of, tap } from 'rxjs';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { TaskManagerService } from '../service/task-manager.service';
import { TaskState, selectTaskList } from '../store/reducers/todo.reducer';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasksList$!: Observable<TaskState>;
  tasksList!: TaskState;
  tasks: Task[] = [];
  test$!: Observable<Task>;
  service!: TaskManagerService;

  constructor(
    private store: Store<any>,
    public taskManagerService: TaskManagerService
  ) {}

  ngOnInit() {
    // this.store
    //   .pipe(
    //     select((appTaskState: any) => appTaskState.appTaskState.task ),
    //     tap((tasks) => (this.tasks = <Task[]>tasks)),
    //     tap(() => console.log('in task list component pipe')),
    //     tap((tasks) => console.log(tasks))
    //   ).subscribe();
    this.taskManagerService.getTasksList().pipe(
      tap(() => console.log('in task list component tasksList pipe')),
      tap((tasks) => console.log(tasks)),
      tap((tasks) => (this.tasks = <Task[]>tasks)),
    ).subscribe()
  }

  onRetrieve(task: Task) {
    this.taskManagerService.retrieveTask(task);
  }
}
 