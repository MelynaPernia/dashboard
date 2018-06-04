import {Component, OnInit, ViewChild} from '@angular/core';
import {NavVerticalComponent} from './nav-vertical/nav-vertical.component';
import {Task} from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NavVerticalComponent) navVertical: NavVerticalComponent;

  constructor() {}
  sizeNav() {
    console.log('st');
  }
}
