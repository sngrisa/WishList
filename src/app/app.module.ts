import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViajeDestinoComponent } from './viaje-destino/viaje-destino.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ListadeejemploComponent } from './listadeejemplo/listadeejemplo.component';
import { RouterModule, Routes} from '@angular/router';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';
import { DestinosApiClient } from './models/destinos-api-client.model';
import { ComboboxComponent } from './combobox/combobox.component';

const routes: Routes =[
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home', component: ListaDestinosComponent},
   {path: 'destino', component: DestinoDetalleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ViajeDestinoComponent,
    ListaDestinosComponent,
    NavbarComponent,
    FooterComponent,
    TarjetasComponent,
    ListadeejemploComponent,
    DestinoDetalleComponent,
    MensajeComponent,
    FormDestinoViajeComponent,
    ComboboxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    DestinosApiClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
