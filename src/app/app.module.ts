import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './zonas/cabecera/cabecera.component';
import { CuerpoComponent } from './zonas/cuerpo/cuerpo.component';
import { PieComponent } from './zonas/pie/pie.component';
import { MenuComponent } from './zonas/cabecera/menu/menu.component';
import { ServiciosComponent } from './zonas/cuerpo/servicios/servicios.component';
import { HomeComponent } from './zonas/cuerpo/home/home.component';
import { NosotrosComponent } from './zonas/cuerpo/nosotros/nosotros.component';
import { ContactosComponent } from './zonas/cuerpo/contactos/contactos.component';
import { AccesoComponent } from './zonas/cuerpo/acceso/acceso.component';
import { PresentacionServiciosComponent } from './zonas/cuerpo/servicios/presentacion-servicios/presentacion-servicios.component';
import { ReservasComponent } from './zonas/cuerpo/servicios/reservas/reservas.component';
import { DeliveryComponent } from './zonas/cuerpo/servicios/delivery/delivery.component';
import { IniciarSesionComponent } from './zonas/cuerpo/acceso/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './zonas/cuerpo/acceso/registrarse/registrarse.component';
import { MenuSecundarioComponent } from './zonas/cabecera/menu-secundario/menu-secundario.component';

/**s===================================terceros============= */
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

/**s===================================material============= */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/**s===================================componentesMaterial============= */
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';

/**s===================================componentesPrimeNG============= */

/**s================================================ */

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
import { GaseosasComponent } from './zonas/cuerpo/servicios/reservas/listapedido/gaseosas/gaseosas.component';
import { RefrescoComponent } from './zonas/cuerpo/servicios/reservas/listapedido/refresco/refresco.component';
import { CombosComponent } from './zonas/cuerpo/servicios/reservas/listapedido/combos/combos.component';
import { TodoComponent } from './zonas/cuerpo/servicios/reservas/listapedido/todo/todo.component';
import { CartaComponent } from './zonas/cuerpo/carta/carta.component';
import { ListapedidoComponent } from './zonas/cuerpo/listapedido/listapedido.component';

/**s================================================ */

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('449141282748-akqf08vmu43fv6fvq6mq6ea2b5uibgkr.apps.googleusercontent.com')
  },
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    MenuComponent,
    ServiciosComponent,
    HomeComponent,
    NosotrosComponent,
    ContactosComponent,
    AccesoComponent,
    PresentacionServiciosComponent,
    ReservasComponent,
    DeliveryComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    MenuSecundarioComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component,
    Piso0Component,
    Piso1Component,
    Piso2Component,
    Paso4Component,
    Paso5Component,
    Paso6Component,
    PollosComponent,
    GaseosasComponent,
    RefrescoComponent,
    CombosComponent,
    TodoComponent,
    CartaComponent,
    ListapedidoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
 }
