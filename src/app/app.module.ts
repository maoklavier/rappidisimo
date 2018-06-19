import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './globals/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './globals/header/header.component';
import { CanastaComponent } from './globals/canasta/canasta.component';

// importo el Router

import {appRouter} from './routing';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { SliderProductosComponent } from './globals/slider/slider-productos/slider-productos.component';
import { SliderProductoItemComponent } from './globals/slider/slider-productos/slider-producto-item/slider-producto-item.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    CanastaComponent,
    CategoriaComponent,
    SliderProductosComponent,
    SliderProductoItemComponent
  ],
  imports: [
    BrowserModule,
    appRouter // Importo la variable routing .ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
