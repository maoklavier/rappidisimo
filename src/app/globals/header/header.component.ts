import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { 
   // window.localStorage.setItem('contrasena',"This es la contrasena");
  let con = localStorage.getItem('contrasena');
  console.log(con)
  }

  ngOnInit() {
  }

}
