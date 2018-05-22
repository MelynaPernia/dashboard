import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // function addTask() {
    //   console.log('add')
    // }
  }
  // getAddTask
  addTask(e) {


    console.log(e);
    console.log(e.value);

    if (e.keyCode === 13) {
      e.preventDefault();
      console.log(e);
      console.log(e.target.value);


    }
  }

}
