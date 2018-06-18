import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../../models/producto';


@Component({
  selector: 'app-slider-producto-item',
  templateUrl: './slider-producto-item.component.html',
  styleUrls: ['./slider-producto-item.component.scss']
})
export class SliderProductoItemComponent implements OnInit {
  @Output() adicionar = new EventEmitter();
 
  @Input() producto:Producto;

  constructor() { }

  
  ngOnInit() {
  }

  agregar(){
    console.log(`Agregado ${this.producto.id}:${this.producto.nombre}`);

          
    // algun proceso aca

    // disparar el nuevo evento
      this.adicionar.emit();
  }

}