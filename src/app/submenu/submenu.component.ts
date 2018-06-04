import { Component, OnInit } from '@angular/core';
// import {SubmenuComponent} from '..'

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
  Holis(e) {
    console.log(e);
    const st = document.getElementById('li1')
    console.log(st)
  }

}
