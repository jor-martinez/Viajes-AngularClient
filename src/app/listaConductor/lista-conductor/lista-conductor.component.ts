import { Component } from '@angular/core';
import { ServicioRestService } from '../../servicioRest/servicio-rest.service';

@Component({
  selector: 'app-lista-conductor',
  templateUrl: './lista-conductor.component.html',
  styleUrls: ['./lista-conductor.component.css']
})
export class ListaConductorComponent {

  constructor(private serviceRest: ServicioRestService){
    this.serviceRest.getMediosPago();
    this.serviceRest.getListaConductores();
  }

  get conductores(){
    return this.serviceRest.conductores;
  }

  get mediosPago(){
    return this.serviceRest.mediosPago;
  }

  eliminar(id:number){}
}
