import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
// import {j}

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {

  constructor() { }
  isMiddleDivVisible: Boolean = true;
  ngOnInit() {
    // $(window).click(function () {
    //   // alert('ok');
    //   // $('li').on('click',function(e){
    //   //   console.log(e)
    //   // })
    // });
  }
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
