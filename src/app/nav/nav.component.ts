import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  textSearch1 = 'Holis'
  constructor() { }

  ngOnInit() {
  }
  buscar() {
    console.log('st');
    const s = document.getElementById('search-project');
   }
  cambiarStyle(e) {
    const spanIcono = document.getElementById('basic-addon2');
    // console.log(e.target.value.length)
    spanIcono.lastElementChild.setAttribute('class', 'fas fa-times');
    if(e.target.value.length ===  0){
      spanIcono.lastElementChild.setAttribute('class', 'fas fa-search');
    }

    // console.log('holis')
    // console.log(spanIcono)
    // console.log(spanIcono.lastElementChild)
    // spanIcono.lastElementChild.setAttribute('class', 'fas fa-times');

  }


}
