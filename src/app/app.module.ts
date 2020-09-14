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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
