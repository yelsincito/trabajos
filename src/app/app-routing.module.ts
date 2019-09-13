import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './zonas/cuerpo/home/home.component';
import { ContactosComponent } from './zonas/cuerpo/contactos/contactos.component';
import { CuerpoComponent } from './zonas/cuerpo/cuerpo.component';
import { NosotrosComponent } from './zonas/cuerpo/nosotros/nosotros.component';
import { ServiciosComponent } from './zonas/cuerpo/servicios/servicios.component';
import { AccesoComponent } from './zonas/cuerpo/acceso/acceso.component';
import { IniciarSesionComponent } from './zonas/cuerpo/acceso/iniciar-sesion/iniciar-sesion.component';
import { ReservasComponent } from './zonas/cuerpo/servicios/reservas/reservas.component';
import { PresentacionServiciosComponent } from './zonas/cuerpo/servicios/presentacion-servicios/presentacion-servicios.component';
import { Paso1Component } from './zonas/cuerpo/servicios/reservas/paso1/paso1.component';
import { Paso2Component } from './zonas/cuerpo/servicios/reservas/paso2/paso2.component';
import { Paso3Component } from './zonas/cuerpo/servicios/reservas/paso3/paso3.component';
import { Piso0Component } from './zonas/cuerpo/servicios/reservas/pisos/piso0/piso0.component';
import { Piso1Component } from './zonas/cuerpo/servicios/reservas/pisos/piso1/piso1.component';
import { Piso2Component } from './zonas/cuerpo/servicios/reservas/pisos/piso2/piso2.component';
import { Paso4Component } from './zonas/cuerpo/servicios/reservas/paso4/paso4.component';
import { Paso5Component } from './zonas/cuerpo/servicios/reservas/paso5/paso5.component';
import { Paso6Component } from './zonas/cuerpo/servicios/reservas/paso6/paso6.component';
import { PollosComponent } from './zonas/cuerpo/servicios/reservas/listapedido/pollos/pollos.component';
import { CombosComponent } from './zonas/cuerpo/servicios/reservas/listapedido/combos/combos.component';
import { GaseosasComponent } from './zonas/cuerpo/servicios/reservas/listapedido/gaseosas/gaseosas.component';
import { RefrescoComponent } from './zonas/cuerpo/servicios/reservas/listapedido/refresco/refresco.component';
import { TodoComponent } from './zonas/cuerpo/servicios/reservas/listapedido/todo/todo.component';
import { CartaComponent } from './zonas/cuerpo/carta/carta.component';
import { ListapedidoComponent } from './zonas/cuerpo/listapedido/listapedido.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "cuerpo", component: CuerpoComponent,
    children: [
    {path: "home", component: HomeComponent},
    {path: "contactos", component: ContactosComponent},
    {path: "nosotros", component: NosotrosComponent},
    { path: "carta", component: CartaComponent },
    {path: "lista-pedido", component: ListapedidoComponent},
    { path: "servicios", component: ServiciosComponent,
     children: [
      {path: "presentacion-servicios", component: PresentacionServiciosComponent},
      {path: "reservas", component: ReservasComponent, 
       children: [
        {path: "reservasP1", component: Paso1Component,
        children: [
          {path: "piso0", component: Piso0Component},
          {path: "piso1", component: Piso1Component},
          {path: "piso2", component: Piso2Component}
         ]},
        {path: "reservasP2", component: Paso2Component,
          children:[
            {path: "todo", component: TodoComponent},
            { path: "pollos", component: PollosComponent },
            { path: "combos", component: CombosComponent },
            { path: "gaseosas", component: GaseosasComponent },
            { path: "bebidas", component: RefrescoComponent},
          ]}, 
        {path: "reservasP3", component: Paso3Component},
        {path: "reservasP4", component: Paso4Component},
        {path: "reservasP5", component: Paso5Component},
        {path: "reservasP6", component: Paso6Component},
       ]
      },
     ]
  
     },
  
    {path: "acceso", component: AccesoComponent,
      children: [
      {path: "iniciar-sesion", component: IniciarSesionComponent}
                ]
    }
              ]
  },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
