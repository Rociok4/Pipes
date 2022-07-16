import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: []
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  
  ordenarPor: string = '';
  
  heroes: Heroe[]=[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde

    },
    {
      nombre: 'Thor',
      vuela: false,
      color: Color.rojo

    },
    {
      nombre: 'Spiderman',
      vuela: true,
      color: Color.verde

    },
  ]

  

 

  cambiar(){
    this.enMayusculas = !this.enMayusculas

  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;

  }

}