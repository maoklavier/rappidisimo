import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../../pages/detail/detail';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})


export class NavigationDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

export class MenuComponent {
  
  text: string;

items: any[];
item;


  constructor(public navCtrl: NavController) {
    

    this.items = [
      {titulo: 'Home', argumento:'', component: HomePage},
      {titulo: 'Licores', argumento:'Licores', component: DetailPage},
      {titulo: 'Snacks', argumento:'Snacks', component: DetailPage},
      {titulo: 'Bebidas', argumento:'Bebidas', component: DetailPage},
      {titulo: 'Farmacia', argumento:'Farmacia', component: DetailPage},
    ]
  }



  itemSelected(item){
     
    this.navCtrl.push(DetailPage, { item: item });
   
  }

}



