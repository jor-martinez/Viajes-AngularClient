import { Component } from '@angular/core';
import { ServicioRestService } from '../../servicioRest/servicio-rest.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
  
  constructor(private serviceRest: ServicioRestService){
    this.serviceRest.getListaClientes();
  }

  get clientes(){
    return this.serviceRest.clientes;
  }

  eliminar(id:number){
    this.serviceRest.eliminarCliente(id);
  }

}
