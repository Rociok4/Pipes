import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {

  nombre: string = 'Rocio R.J';
  genero: string = 'femenino';

  mapping = {
    'masculino':'invitarlo',
    'femenino': 'invitarla',
    
  }

  clientes: string [] = ["Rigoberta",'Aurelio','Diana', 'Maria','Izan'];
  pluralMap = {
    '=0': 'no tenemos nigún ',
    '=1':'tenemos un cliente ',
    '=2':'tenemos 2 clientes',
    'other':'tenemos # clientes'

  }
  
  cambiarCliente(){
    this.nombre = 'Manuel';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
    
  }

  persona = {
    nombre: 'Rocio',
    edad: 34,
    dirección: 'Fuenlabrada, Madrid'

  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuele: false

    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  miObservable = interval(2000);

  valorPromesa = new Promise ((resolve, reject)=>{

    setTimeout(()=>{
      resolve('Fin de la promesa!')
    }, 3500)


  })

}
