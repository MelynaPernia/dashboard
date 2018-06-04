import {Component, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery'
import {SubmenuComponent} from '../submenu/submenu.component';
// import {j}

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {
  @ViewChild(SubmenuComponent) submenu: SubmenuComponent;
  state: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    $('.nav-sidebar-link').toggle();
  }

  /*
  toDo(e) {
    const toDo = document.getElementById('to-do');
    toDo.parentElement.dataset.style = 'box';
  }

  boxLista() {
    // console.log('st')
    const boxTwo = document.getElementById('box-two');
    // console.log(boxTwo.lastElementChild);
    boxTwo.lastElementChild.removeAttribute('hidden');
    // boxTwo.lastElementChild.setAttribute('hidden','');
    // if (boxTwo.style.display === 'none') {
    //   boxTwo.style.display = 'block';
    // } else {
    //   boxTwo.style.display = 'none';
    // }
    // console.log(boxTwo.lastElementChild.setAttribute('hidden', ''));
    // console.log(boxTwo.lastElementChild.setAttribute('hidden',false));


  }

  navIconos() {
    console.log('st');
  }
*/

  //   $(window).click(function(){
  //     alert('st')
  //   })
  // }

  // toggleList(e) {
  //   // console.log(e.path);
  //   console.log($('.nav-sidebar li').data('tooltip'))
  //
  //
  // }

  // deslizarLista(e) {
  //   console.log(e)
  //   // $('.nav-sidebar li')
  // }

}
