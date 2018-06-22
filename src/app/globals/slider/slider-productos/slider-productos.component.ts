import { Component, OnInit, Output } from '@angular/core';
import { Producto } from '../../../models/producto';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-slider-productos',
  templateUrl: './slider-productos.component.html',
  styleUrls: ['./slider-productos.component.scss']
})
export class SliderProductosComponent implements OnInit {
  productos: Producto[];
 
 
  
  constructor() { 
this.productos = new Array<Producto>();

    for(let i=0; i<5; i++){

      let p = new Producto();

      p.id = i;
      p.nombre=`nombre ${i}`;
      p.descripcion =`descripcion ${i}`;
      p.precio = i*1000;
      p.imagen = "https://loremflickr.com/320/240/dog,cat/all";

      this.productos.push(p);
    }


  }

  ngOnInit() {
  }

  onAdicionar(producto:Producto){
    console.log('added');
  }

}