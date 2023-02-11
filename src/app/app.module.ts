import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './listaClientes/lista-clientes/lista-clientes.component';
import { NavBarComponent } from './navBar/nav-bar/nav-bar.component';
import { DetalleClienteComponent } from './detalleCliente/detalle-cliente/detalle-cliente.component';
import { AltaClienteComponent } from './altaCliente/alta-cliente/alta-cliente.component';
import { AltaConductorComponent } from './altaConductor/alta-conductor/alta-conductor.component';
import { ListaConductorComponent } from './listaConductor/lista-conductor/lista-conductor.component';
import { AltaViajeComponent } from './altaViaje/alta-viaje/alta-viaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    NavBarComponent,
    DetalleClienteComponent,
    AltaClienteComponent,
    AltaConductorComponent,
    ListaConductorComponent,
    AltaViajeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
