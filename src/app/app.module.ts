import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViajeDestinoComponent } from './components/viaje-destino/viaje-destino.component';
import { ListaDestinosComponent } from './components/lista-destinos/lista-destinos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ListadeejemploComponent } from './components/listadeejemplo/listadeejemplo.component';
import { RouterModule, Routes} from '@angular/router';
import { DestinoDetalleComponent } from './components/destino-detalle/destino-detalle.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDestinoViajeComponent } from './components/form-destino-viaje/form-destino-viaje.component';
import { DestinosApiClient } from './models/destinos-api-client.model';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { DestinosViajesState, reducerDestinosViajes, intializeDestinosViajesState, DestinosViajesEffects } from './models/destinos-viajes-state.model';
import { ActionReducerMap, INITIAL_STATE, ReducerObservable, Store, StoreModule } from '@ngrx/store';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login/login.component';
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { UsuarioLogueadoGuard } from './guards/usuario-logueado/usuario-logueado.guard';
import { AuthService } from './services/auth.service';

const routes: Routes =[
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home', component: ListaDestinosComponent},
   {path: 'destino', component: DestinoDetalleComponent},
   {path: 'login', component: LoginComponent},
   {path: 'protected', component: ProtectedComponent,
   canActivate: [UsuarioLogueadoGuard],
  },
];



// Redux Init
export interface AppState{
  destinos: DestinosViajesState;
}

const reducers: ActionReducerMap<AppState> ={
  destinos: reducerDestinosViajes
};

let reducersInitialsState = {
  destinos: intializeDestinosViajesState()
};

// Redux Fin Init

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
    LoginComponent,
    ProtectedComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, ({initialState: reducersInitialsState })),
    EffectsModule.forRoot([DestinosViajesEffects]),
    StoreDevtoolsModule.instrument(),
  ],

  providers: [
    UserService,
    DestinosApiClient,
    AuthService,
    UsuarioLogueadoGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
