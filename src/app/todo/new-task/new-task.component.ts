import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { Task } from 'src/app/model/task';
import { TaskManagerService } from '../service/task-manager.service';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
   
  constructor(private taskManagerService:TaskManagerService){

  }
  ngOnInit(): void {
    
  }

  eventNewTask(task:Task){
    const newTask = {...task,id:0}
    console.log("eventNewTask");
    console.log(task);    
    this.taskManagerService.addTask(newTask);
  }
 
}
