import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskManagerService } from './service/task-manager.service';
import { taskReducer } from './store/reducers/todo.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    NewTaskComponent,
    TaskFormComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({appTaskState : taskReducer}),
    StoreDevtoolsModule.instrument({
      name:'counter devTools',
      maxAge:15
      })
  ],
  exports:[ 
    NewTaskComponent,
    TaskListComponent,
    TaskFormComponent,
  ],

  providers:[
    TaskManagerService
  ]
})
export class ToDoModule { }
