import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  allTasks: Task[] = [];
  allTasks$: Observable<Task[]> = of([]);
  constructor() {}

  getAllTasks():  Observable<Task[]> {
    return  (this.allTasks$);
  }

  addTask(task: Task): Observable<Task[]> {
    return this.getAllTasks().pipe(
     // tap(value => console.log(task)),
      map((taskList) => [...taskList,<Task>{date:task.date,message:task.message}]),           
      tap((task) => (this.allTasks$ = of(task))),
      //tap(value => console.log(`apres MAJ: ${value[1].message}`))
    );
  }
}

