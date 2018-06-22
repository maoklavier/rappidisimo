import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild(Nav) nav:Nav;

  rootPage:any = TabsPage;
  openpage(page){
    this.nav.setRoot(page.component, {page});

 }
  items: any[];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.items = [
      {titulo: 'Home', argumento:'', component: HomePage},
      {titulo: 'Licores', argumento:'Licores', component: DetailPage},
      {titulo: 'Snacks', argumento:'Snacks', component: DetailPage},
      {titulo: 'Bebidas', argumento:'Bebidas', component: DetailPage},
      {titulo: 'Farmacia', argumento:'Farmacia', component: DetailPage},
    ];
  }

 

}
