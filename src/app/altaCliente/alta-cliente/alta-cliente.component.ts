import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicioRestService } from '../../servicioRest/servicio-rest.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent {

  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('apPat') apPat!: ElementRef;
  @ViewChild('apMat') apMat!: ElementRef;
  @ViewChild('telefono') telefono!: ElementRef;
  @ViewChild('fechaNacimiento') fechaNacimiento!: ElementRef;

  constructor(private serviceRest: ServicioRestService){

  }

  guardar():void{
    const nombre:String = this.nombre.nativeElement.value;
    const apPat:String = this.apPat.nativeElement.value;
    const apMat:String = this.apMat.nativeElement.value;
    const telefono:String = this.telefono.nativeElement.value;
    const fechaNacimiento:String = this.fechaNacimiento.nativeElement.value;

    this.serviceRest.guardarCliente(nombre, apPat, apMat, telefono, fechaNacimiento);

  }

}
