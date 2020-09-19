import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViajeDestino } from './../models/viaje-destino.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [DestinosApiClient]
})

export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<ViajeDestino>;
  updates: string[];

  constructor(
    public destinosApiClient: DestinosApiClient) { 
  this.onItemAdded = new EventEmitter();
  this.updates = [];
  }

  ngOnInit(){
    this.destinosApiClient.subscribeOnChange((d: ViajeDestino) => {
      if(d !=null){
        this.updates.push('Se ha elegido a '+ d.nombre);
      }
    });
  }
  
  agregado(d: ViajeDestino){
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(d: ViajeDestino){
    this.destinosApiClient.elegir(d);
    };
  }

