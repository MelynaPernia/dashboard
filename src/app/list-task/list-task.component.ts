import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  // @Input() listTask ;
  // obj =  ;

  listTask = [
    {id: 1 , name: 'Hacer tarea', state: true},
    {id: 2 , name: 'Hacer tarea 1', state: false},
    {id: 3 , name: 'Hacer tarea 2', state: true},
    {id: 4 , name: 'Hacer tarea 3', state: true}];
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
