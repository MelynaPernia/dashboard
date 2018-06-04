import { Component, OnInit } from '@angular/core';
import {Task} from '../models/task.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  listTask: Task[] = [{id: 1, name: 'hacer t1', state: false },
                      {id: 2, name: 'hacer t2', state: true }]; // declarando la tareas
  constructor() { }

  ngOnInit() {
  }

}
