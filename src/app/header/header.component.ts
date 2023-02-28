import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  taskList$! : Observable<Task[]>
  ngOnInit(): void {
    
  }
}
