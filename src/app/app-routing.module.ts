import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './listaClientes/lista-clientes/lista-clientes.component';
import { AltaClienteComponent } from './altaCliente/alta-cliente/alta-cliente.component';
import { ListaConductorComponent } from './listaConductor/lista-conductor/lista-conductor.component';
import { AltaConductorComponent } from './altaConductor/alta-conductor/alta-conductor.component';
import { DetalleClienteComponent } from './detalleCliente/detalle-cliente/detalle-cliente.component';
import { AltaViajeComponent } from './altaViaje/alta-viaje/alta-viaje.component';

const routes: Routes = [
  {path: 'clientes/listado', component: ListaClientesComponent},
  {path: 'clientes/alta', component: AltaClienteComponent},
  {path: 'clientes/detalle/:id', component: DetalleClienteComponent},
  {path: 'conductores/listado', component: ListaConductorComponent},
  {path: 'conductores/alta', component: AltaConductorComponent},
  {path: 'viajes/alta/:idCliente', component: AltaViajeComponent},
  {path: '', component: ListaClientesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
