import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServicioRestService {

  
  public clientes: any[] = [];
  public conductores: any[] = [];
  public mediosPago: any[] = [];
  public cliente: any;

  constructor(private clienteHttp: HttpClient, private router: Router) {}

  getMediosPago(){
    this.clienteHttp.get("http://localhost:8080/api/enum/pagos").subscribe((resp:any)=>{
    console.log(resp);  
    this.mediosPago = resp;
    })
  }

  getListaClientes(){
    this.clienteHttp.get("http://localhost:8080/api/clientes").subscribe((resp:any)=>{
      console.log(resp);
      this.clientes = resp;
    })    
  }

  guardarCliente(nombre:String, apPat:String, apMat:String, telefono:String, fecha:String){
    const headers = new HttpHeaders()
    .set('Authorization', 'Basic YWtaW46YWRtaW4=');

    this.clienteHttp.post("http://localhost:8080/api/clientes", {
      nombre: nombre, ap_paterno: apPat, ap_materno: apMat, telefono: telefono, fecha_nacimiento: fecha
    }, {headers: headers, observe: "response"}).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.statusText == "OK"){
        Swal.fire({
          title: "OK",
          text: "Cliente agregado exitosamente",
          confirmButtonText: "Ok",
          icon: 'success'
        }).then((result)=>{
          if (result.isConfirmed){
            this.router.navigate(['/clientes/listado']);

          }
        })
      }
    })
  }

  eliminarCliente(id:number){
    const headers = new HttpHeaders()
      .set('Authorization', 'Basic YWtaW46YWRtaW4=');

    this.clienteHttp.delete("http://localhost:8080/api/clientes/"+id, {
      headers: headers, observe: "response"
    }).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.statusText == "OK"){
        Swal.fire({
          title: "OK",
          text: "Cliente eliminado exitosamente",
          confirmButtonText: "Ok",
          icon: 'success'
        }).then((result)=>{
          if (result.isConfirmed){
            this.getListaClientes();

          }
        })
      }
    })
  }

  getListaConductores(){
    this.clienteHttp.get("http://localhost:8080/api/conductores").subscribe((resp:any)=>{
      console.log(resp);
      this.conductores = resp;
    }) 
  }

  guardarConductor(nombre:String, apPat:String, apMat:String, fechaNacimiento:String, telefono:String, licencia:String, marcaVehiculo:String, modeloVehiculo:String, placasVehiculo:String, activo:String){
    const headers = new HttpHeaders().set('Authorization', 'Basic YWtaW46YWRtaW4=');

    this.clienteHttp.post("http://localhost:8080/api/conductores", {
      nombre: nombre, apPaterno: apPat, apMaterno: apMat, fechaNacimiento: fechaNacimiento, telefono: telefono, licencia: licencia, marcaVehiculo: marcaVehiculo, modeloVehiculo: modeloVehiculo, placasVehiculo: placasVehiculo, activo: activo
    }, {
      headers: headers, observe: "response"
    }).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.statusText == "OK"){
        Swal.fire({
          title: "OK",
          text: "Conductor agregado exitosamente",
          confirmButtonText: "Ok",
          icon: 'success'
        }).then((result)=>{
          if (result.isConfirmed){
            this.router.navigate(['/conductores/listado']);

          }
        })
      }
    })
  }
  
  getCliente(id:number){
    this.clienteHttp.get("http://localhost:8080/api/clientes/"+id, {observe: "response"}).subscribe((resp:any)=>{
      console.log(resp);
      this.cliente = resp.body;
      console.log("id cliente: "+ this.cliente.id)
    })
  }

  guardarViaje(idCliente:String, idConductor:String, fechaViaje:String, horaViaje:String, dirSalida:String, dirLlegada:String, totalPago:String, calif:String, medioPago:String){
    const headers = new HttpHeaders().set('Authorization', 'Basic YWtaW46YWRtaW4=');

    this.clienteHttp.post("http://localhost:8080/api/viajes", {
      fechaViaje: fechaViaje, horaViaje: horaViaje, direccionSalida: dirSalida, direccionLlegada: dirLlegada, pagoTotal: totalPago, medioPago: medioPago, calificacion: calif, cliente: idCliente, conductor: idConductor
    }).subscribe((resp:any)=>{
      console.log(resp);
      Swal.fire({
        title: resp.body.msg,
        confirmButtonText: "Ok"
      }).then( (result) => {
        if (result.isConfirmed){
          this.router.navigate(["/clientes/detalle", idCliente])
        }
      })
    })
  }

}
