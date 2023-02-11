import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServicioRestService } from '../../servicioRest/servicio-rest.service';

@Component({
  selector: 'app-alta-conductor',
  templateUrl: './alta-conductor.component.html',
  styleUrls: ['./alta-conductor.component.css']
})
export class AltaConductorComponent {
  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('apPat') apPat!: ElementRef;
  @ViewChild('apMat') apMat!: ElementRef;
  @ViewChild('fechaNacimiento') fechaNacimiento!: ElementRef;
  @ViewChild('telefono') telefono!: ElementRef;
  @ViewChild('licencia') licencia!: ElementRef;
  @ViewChild('marcaVehiculo') marcaVehiculo!: ElementRef;
  @ViewChild('modeloVehiculo') modeloVehiculo!: ElementRef;
  @ViewChild('placasVehiculo') placasVehiculo!: ElementRef;
  @ViewChild('activo') activo!: ElementRef;

  constructor(private serviceRest: ServicioRestService){ }

  guardar():void{
    const nombre:String = this.nombre.nativeElement.value;
    const apPat:String = this.apPat.nativeElement.value;
    const apMat:String = this.apMat.nativeElement.value;
    const fechaNacimiento:String = this.fechaNacimiento.nativeElement.value;
    const telefono:String = this.telefono.nativeElement.value;
    const licencia:String = this.licencia.nativeElement.value;
    const marcaVehiculo:String = this.marcaVehiculo.nativeElement.value;
    const modeloVehiculo:String = this.modeloVehiculo.nativeElement.value;
    const placasVehiculo:String = this.placasVehiculo.nativeElement.value;
    const activo:String = this.activo.nativeElement.value;

    this.serviceRest.guardarConductor(nombre, apPat, apMat, fechaNacimiento, telefono, licencia, marcaVehiculo, modeloVehiculo, placasVehiculo, activo);
  }
}
