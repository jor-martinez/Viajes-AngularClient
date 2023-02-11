import { Component, Inject, LOCALE_ID, ViewChild, ElementRef } from '@angular/core';
import { ServicioRestService } from '../../servicioRest/servicio-rest.service';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-alta-viaje',
  templateUrl: './alta-viaje.component.html',
  styleUrls: ['./alta-viaje.component.css']
})
export class AltaViajeComponent {
  @ViewChild('fechaViaje') fechaViaje!: ElementRef;
  @ViewChild('conductor') idConductor!: ElementRef;
  @ViewChild('horaViaje') horaViaje!: ElementRef;
  @ViewChild('dirSalida') dirSalida!: ElementRef;
  @ViewChild('dirLlegada') dirLlegada!: ElementRef;
  @ViewChild('totalPago') totalPago!: ElementRef;
  @ViewChild('calif') calif!: ElementRef;
  @ViewChild('medioPago') medioPago!: ElementRef;

  public idCliente:number = 1;
  public sub: any;
  public fechaHoy: String = "";
  public horaHoy: String = "";

  constructor(@Inject(LOCALE_ID)private locale:string,  private serviceRest: ServicioRestService, private route: ActivatedRoute){
    this.sub = this.route.params.subscribe(params=>{
      this.idCliente = +params['idCliente'];
      console.log(this.idCliente);
    })
    this.serviceRest.getListaConductores();
    this.serviceRest.getMediosPago();
    this.serviceRest.getCliente(this.idCliente);

    this.fechaHoy = formatDate(Date.now(), 'yyyy-MM-dd', this.locale);
    this.horaHoy = formatDate(Date.now(), 'HH:mm', this.locale);
    console.log(this.fechaHoy)
  }

  get conductores(){
    return this.serviceRest.conductores;
  }

  get mediosPago(){
    return this.serviceRest.mediosPago;
  }

  get cliente(){
    return this.serviceRest.cliente;
  }

  guardarViaje(idCliente:String):void{
    const idConductor:String = this.idConductor.nativeElement.value;
    const fechaViaje:String = this.fechaViaje.nativeElement.value;
    const horaViaje:String = this.horaViaje.nativeElement.value;
    const dirSalida:String = this.dirSalida.nativeElement.value;
    const dirLlegada:String = this.dirLlegada.nativeElement.value;
    const totalPago:String = this.totalPago.nativeElement.value;
    const calif:String = this.calif.nativeElement.value;
    const medioPago:String = this.medioPago.nativeElement.value;

    this.serviceRest.guardarViaje(idCliente, idConductor, fechaViaje, horaViaje, dirSalida, dirLlegada, totalPago, calif, medioPago);

  }



}
