import { Component } from '@angular/core';
import { ServicioRestService } from '../../servicioRest/servicio-rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent {

  public id:number = 1;
  public sub:any;

  constructor(private serviceRest: ServicioRestService, private router: ActivatedRoute){
    this.sub = this.router.params.subscribe(params=>{
      this.id = +params['id'];
      this.serviceRest.getCliente(this.id); 
      console.log(this.id);
    })
  }

  get cliente(){
    return this.serviceRest.cliente;
  }

}
