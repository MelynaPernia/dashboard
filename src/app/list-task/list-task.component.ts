import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../models/task.model';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  @Input() listTask: Task[];
  constructor() { }

  ngOnInit() {
  }


  addTask(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.listTask.push({id: (this.listTask.length + 1) , name: e.target.value, state: false});
    }
  }

}
