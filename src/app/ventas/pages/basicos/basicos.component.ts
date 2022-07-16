import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent  {

  nombreLower: string = "rocio";
  nombreUpper: string = 'ROCIO';
  nombreTitle: string = 'RoCiO roDRigueZ';

  fecha: Date = new Date()



}
