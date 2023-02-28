import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable,tap } from 'rxjs';
import { Task } from 'src/app/model/task';
//import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  task!: Task;


  @Output() eventTaskList = new EventEmitter<Task>();

  constructor(
    private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    this.task=new Task();
    this.taskForm = this.formBuilder.group(
      {
         date: [null,Validators.required],
        message: [null,Validators.required],
      }
      ,{
        updateOn: 'blur'
      }
    );
      
   this.taskForm.valueChanges.pipe(
      map((value)=>({...value})),
      tap((task) => (this.task = task)),
      tap((task) => console.log("task.date " + task.date))
    ).subscribe( );
  }

  onSubmitForm() {
    this.eventTaskList.emit(this.task); 
    this.taskForm.reset();
  }
}
